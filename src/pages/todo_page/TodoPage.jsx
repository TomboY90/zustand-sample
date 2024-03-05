import { useEffect } from "react";
import {useShallow} from "zustand/react/shallow";

import TodoList from "./components/TodoList.jsx";

import useTodoListViewModel from "./hooks/useTodoListViewModel.jsx";
import {TodoStore} from "./store/TodoStore.js";

const TodoPage = () => {
  // const { todoList, getters, actions } = TodoStore(); // 이 방식으로 하면 input 변할 때 re-render가 발생!

  // 아래 방식처럼 하나씩 꺼내쓰면 re-render 발생하지 않음
  // const todoList = TodoStore(state => state.todoList);
  // const getters = TodoStore(state => state.getters);
  // const actions = TodoStore(state => state.actions);

  // 위 방식과 같이 re-render 발생하지 않음 -> useShallow 사용하여 destructuring 으로 한 번에 선언하는 방식
  const { todoList, getters, actions } = TodoStore(useShallow((state) => ({
    todoList: state.todoList,
    getters: state.getters,
    actions: state.actions
  })))

  const { allTodoList } = useTodoListViewModel();

  useEffect(() => {
    if (allTodoList) {
      actions.setTodoList(allTodoList);
    }
  }, [allTodoList])

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ paddingRight: '20px', borderRight: '1px solid #dedede' }}>
        <h1>All TodoList</h1>
        <TodoList todoList={todoList} />
      </div>

      <div>
        <h1>Completed TodoList</h1>
        <TodoList todoList={getters.getCompletedTodoList()} readOnly />
      </div>
    </div>
  );
};

export default TodoPage;
