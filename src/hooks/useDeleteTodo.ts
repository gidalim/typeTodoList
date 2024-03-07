import { useMutation } from "@tanstack/react-query"

type DeleteDoListFn = (id : string) => Promise<void>

export const useDeleteTodo = (deleteDoList: DeleteDoListFn) =>{
  const {mutate } = useMutation<void, Error, string>({
    mutationFn:deleteDoList
  })
  
  return {mutate}
}