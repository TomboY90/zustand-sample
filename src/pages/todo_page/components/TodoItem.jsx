import React from 'react';
import {TodoStore} from "../store/TodoStore.js";

const TodoItem = ({ todo, index, readOnly }) => {
  const actions = TodoStore(state => state.actions);

  return (
    <div key={todo.id}>
      <span>이름 : {todo.title}</span>
      <span>상태 : {todo.completed.toString()}</span>
      {
        !readOnly && (
          <button
            style={{ width: '70%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            onClick={() => actions.toggleTodo(index)}
          >Toggle Todo</button>
        )
      }
    </div>
  );
};

export default TodoItem;
