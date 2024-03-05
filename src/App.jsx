import './App.css'

import {TodoStore} from "./store/TodoStore.js";

function App() {
  const { states, getters, actions } = TodoStore();

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div style={{ paddingRight: '20px', borderRight: '1px solid #dedede' }}>
        <h1>All TodoList</h1>
        <div className="card">
          {
            states.todoList?.map((todo, index) => (
              <div key={todo.id}>
                <span>이름 : {todo.name}</span>
                <span>상태 : {todo.completed.toString()}</span>
                <button
                  style={{ width: '70%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  onClick={() => actions.toggleTodo(index)}
                >Toggle Todo</button>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <h1>Completed TodoList</h1>
        <div className="card">
          {
            getters.getCompletedTodoList()?.map(todo => (
              <div key={todo.id}>
                <span>이름 : {todo.name}</span>
                <span>상태 : {todo.completed.toString()}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
