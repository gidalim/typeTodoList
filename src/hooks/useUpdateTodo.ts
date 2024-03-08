import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { QUERY_KEYS } from "./keys.constant";
import { updateDoList } from "../survice/todos";
import { UpdateTodoType } from "../types/Todo";

export const useUpdateTodo = () => {
  const { mutate } = useMutation({
    mutationFn: async (data: UpdateTodoType) => {
      return await updateDoList(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOLIST] });
    },
    onError: (error) => {
      console.error("업데이트 안됨", error);
    },
  });
  return { updateTodo: mutate };
};
