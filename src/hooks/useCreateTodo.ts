import { useMutation } from "@tanstack/react-query"
import { Todo } from "../types/Todo"
import { createDoList } from "../survice/todos"
import { queryClient } from "../main"
import { QUERY_KEYS } from "./keys.constant"


export const useCreateTodo = () =>{
  const {mutate : addTodo } = useMutation({
    mutationFn : async( data: Todo) =>{
      return await createDoList(data)
    },
    onSuccess : async () =>{
      await queryClient.invalidateQueries({queryKey : [QUERY_KEYS.TODOLIST]})
    }
  })
}