import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider,
} from 'react-router-dom';

import TodoPage from "../pages/todo_page/TodoPage.jsx";
import TodoEditPage from "../pages/todo_page/TodoEditPage.jsx";

function RootRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={'/'} element={<TodoPage />} />
        <Route path={'/edit/:id'} element={<TodoEditPage />} />
      </>
    )
  )

  return <RouterProvider router={router} />
}

export default RootRouter;