import { useMutation } from "@tanstack/react-query"
import { deleteDoList } from "../survice/todos"
import { queryClient } from "../main"
import { QUERY_KEYS } from "./keys.constant"


export const useDeleteTodo = () =>{
  const {mutate : deleteTodo} = useMutation({
    mutationFn : async (data : string) =>{
      return await deleteDoList(data)
    },
    onSuccess: async () =>{
      await queryClient.invalidateQueries({queryKey : [QUERY_KEYS.TODOLIST]})
    }
  })
  return {deleteTodo}
}