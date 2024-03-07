import { useMutation } from "@tanstack/react-query";
import { Todo } from "../types/Todo";


type CreateDoListFn = (doList : Todo) => Promise<Todo>;

export const useCreateTodo = (createDoList: CreateDoListFn) =>{
  const { mutate } = useMutation <Todo, Error, Todo>({
    mutationFn : createDoList
  });
  

  return mutate;
}
