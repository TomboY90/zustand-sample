import { useNavigate } from "react-router-dom";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TodoApi} from "../../../apis/TodoApi.js";

const TodoItem = ({ todo, index, readOnly }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => TodoApi.modifyTodoItem(todo),
    onSuccess: queryClient.invalidateQueries({ queryKey: ['fetchAllTodoList'] })
  })

  const handleUpdateComplete = () => {
    const _todo = {...todo};
    _todo.completed = !_todo.completed;

    console.log('_todo', _todo);

    mutate(_todo);
  }

  return (
    <div key={todo.id}>
      <span>이름 : {todo.title}</span>
      <span>상태 : {todo.completed.toString()}</span>
      {
        !readOnly && (
          <>
            <button
              style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)', marginBottom: '10px' }}
              onClick={handleUpdateComplete}
            >상태 변경</button>
            <button
              style={{ width: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              onClick={() => navigate(`/edit/todo.id`)}>수정하기</button>
          </>
        )
      }
    </div>
  );
};

export default TodoItem;
