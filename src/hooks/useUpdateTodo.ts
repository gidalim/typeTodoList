import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../main";
import { QUERY_KEYS } from "./keys.constant";
import { Todo } from "../types/Todo";
import { updateDoList } from "../survice/todos";

export const useUpdateTodo = () =>{
  const {mutate : updateTodo} = useMutation({
    mutationFn : async(data:Todo) =>{
      return await updateDoList(data);
    },
    onSuccess: async () =>{
      await queryClient.invalidateQueries({queryKey : [QUERY_KEYS.TODOLIST]})
    }
  })
  return {updateTodo}
}