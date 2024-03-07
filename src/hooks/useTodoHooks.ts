import { useMutation, useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "./keys.constant";
import { queryClient } from "../main";
import { Todo } from "../types/Todo";


export const useDoListMutation = (axiosApi : any) =>{
  const { mutate } = useMutation({
    mutationFn : async(data : unknown) =>{
      const response = await axiosApi(data);
      return response.data
    },
    onSuccess : async () =>{
      await queryClient.invalidateQueries({queryKey : [QUERY_KEYS.TODOLIST]})
    }
  })
  return mutate
}

type HandleTodos = {
  data : Todo[];
  isLoading : boolean;
  
}


export const 