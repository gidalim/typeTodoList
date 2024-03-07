import { useMutation } from "@tanstack/react-query"
import { Todo } from "../types/Todo"


type UpdateDoListFn = ({id, isDone}: {id: string; isDone : boolean}) =>Promise<Todo>;

export const useUpdateTodo = (updateDoList :UpdateDoListFn) =>{
  const {mutate} = useMutation<Todo, Error, {id:string; isDone : boolean}>({
    mutationFn: updateDoList
  })
  return mutate
} 