import React from 'react';
import './TodoList.css';

import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todoList = [], readOnly = false }) => {
  return (
    <div className="card">
      {
        todoList?.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} readOnly={readOnly} />
        ))
      }
    </div>
  );
};

export default TodoList;
