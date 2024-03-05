import {Fragment} from "react";
import './App.css'

import { TodoStore } from "./store/TodoStore.js";
import SearchComponent from "./components/SearchComponent.jsx";

function App() {
  // const { state, getters, actions } = TodoStore(); // 이 방식으로 하면 input 변할 때 re-render가 발생!

  // 아래 방식처럼 하나씩 꺼내쓰면 re-render 발생하지 않음
  const todoList = TodoStore(state => state.todoList);
  const getters = TodoStore(state => state.getters);
  const actions = TodoStore(state => state.actions);

  console.log('App.jsx re-render');

  return (
    <Fragment>
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ paddingRight: '20px', borderRight: '1px solid #dedede' }}>
          <h1>All TodoList</h1>
          <div className="card">
            {
              todoList?.map((todo, index) => (
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

      <SearchComponent />
    </Fragment>
  )
}

export default App
