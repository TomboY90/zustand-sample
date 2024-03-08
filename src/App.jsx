import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css'

import RootRouter from "./router/index.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  )
}

export default App
