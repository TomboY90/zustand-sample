import { useQueryClient, useMutation} from "@tanstack/react-query";
import { TodoApi } from "../../../apis/TodoApi.js";

export const useMutateTodo = (todo) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => TodoApi.modifyTodoItem(todo),
    onSuccess: queryClient.invalidateQueries({ queryKey: ['fetchAllTodoList'] })
  })
}