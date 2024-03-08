import {useCallback} from "react";

import {useFetchAllTodoList} from "../queries/useQueries.jsx";

const useTodoListViewModel = () => {
  const { data: todoListData } = useFetchAllTodoList();

  const getCompletedTodoList = useCallback(() => {
    return todoListData?.data.filter(todo => todo.completed)
  }, [todoListData])

  return {
    allTodoList: todoListData?.data,
    completedTodoList: getCompletedTodoList()
  }
}

export default useTodoListViewModel;
