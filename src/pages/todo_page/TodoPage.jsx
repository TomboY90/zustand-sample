import TodoList from "./components/TodoList.jsx";

import useTodoListViewModel from "./hooks/useTodoListViewModel.jsx";

const TodoPage = () => {
  const { allTodoList, completedTodoList } = useTodoListViewModel();

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ paddingRight: '20px', borderRight: '1px solid #dedede' }}>
        <h1>All TodoList</h1>
        <TodoList todoList={allTodoList} />
      </div>

      <div>
        <h1>Completed TodoList</h1>
        <TodoList todoList={completedTodoList} readOnly />
      </div>
    </div>
  );
};

export default TodoPage;
