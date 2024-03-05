import {useFetchAllTodoList} from "../queries/index.js";

const useTodoListViewModel = () => {
  const { data: todoListData } = useFetchAllTodoList();

  console.log('todoListData', todoListData);

  return {
    allTodoList: todoListData
  }
}

export default useTodoListViewModel;
