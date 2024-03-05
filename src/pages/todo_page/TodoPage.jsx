import React from 'react';
import useTodoListViewModel from "./hooks/useTodoListViewModel.jsx";
import TodoList from "./components/TodoList.jsx";

const TodoPage = () => {
  const { allTodoList } = useTodoListViewModel();

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ paddingRight: '20px', borderRight: '1px solid #dedede' }}>
        <h1>All TodoList</h1>
        <TodoList todoList={allTodoList} />
      </div>

      <div>
        <h1>Completed TodoList</h1>

      </div>
    </div>
  );
};

export default TodoPage;
