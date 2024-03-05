import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css'

import { TodoStore } from "./store/TodoStore.js";
import SearchComponent from "./components/SearchComponent.jsx";
import {useShallow} from "zustand/react/shallow";

import TodoPage from "./pages/todo_page/TodoPage.jsx";

const queryClient = new QueryClient();

function App() {
  // const { todoList, getters, actions } = TodoStore(); // 이 방식으로 하면 input 변할 때 re-render가 발생!

  // 아래 방식처럼 하나씩 꺼내쓰면 re-render 발생하지 않음
  // const todoList = TodoStore(state => state.todoList);
  // const getters = TodoStore(state => state.getters);
  // const actions = TodoStore(state => state.actions);

  // 위 방식과 같이 re-render 발생하지 않음 -> useShallow 사용하여 destructuring 으로 한 번에 선언하는 방식
  // const { todoList, getters, actions } = TodoStore(useShallow((state) => ({
  //   todoList: state.todoList,
  //   getters: state.getters,
  //   actions: state.actions
  // })))

  console.log('App.jsx re-render');

  return (
    <QueryClientProvider client={queryClient}>
      <TodoPage />
    </QueryClientProvider>
  )
}

export default App
