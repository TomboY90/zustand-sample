import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css'

import TodoPage from "./pages/todo_page/TodoPage.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoPage />
    </QueryClientProvider>
  )
}

export default App
