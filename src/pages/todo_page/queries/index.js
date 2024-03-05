import {createQueryKeys} from "@lukemorales/query-key-factory";
import {useQuery} from "@tanstack/react-query";

import {TodoApi} from "../../../apis/TodoApi.js";

// 사용하기 편하게 쿼리키를 관리한다.
const todoQueryKeys = createQueryKeys('todo', {
  // 목록 조회
  fetchAllTodoList: () => ['fetchAllTodoList'],

  // 단건 조회
  fetchTodoItemDetail: (todoId) => ['fetchTodoItemDetail', todoId],
})

export const useFetchAllTodoList = () => useQuery({
  queryKey: todoQueryKeys.fetchAllTodoList().queryKey,
  queryFn: TodoApi.getAllTodoList(),
})

export const useFetchTodoItemDetail = (todoId) => useQuery({
  queryKey: todoQueryKeys.fetchTodoItemDetail(todoId).queryKey,
  queryFn: () => TodoApi.getTodoItem(todoId),
})
