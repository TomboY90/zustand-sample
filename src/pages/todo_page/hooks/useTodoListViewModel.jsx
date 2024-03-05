import {useFetchAllTodoList} from "../queries/index.js";

const useTodoListViewModel = () => {
  const { data: todoListData } = useFetchAllTodoList();

  return {
    allTodoList: todoListData?.data
  }
}

export default useTodoListViewModel;
