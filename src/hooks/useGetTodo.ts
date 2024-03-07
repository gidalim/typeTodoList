import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";
import { getTodoList } from "../survice/todos";


export const useGetTodo = () =>{
  const {data, isLoading, isError} = useQuery({
    queryKey : [QUERY_KEYS.TODOLIST],
    queryFn : async () => {
      return await getTodoList();
    },
    initialData : []
  })
  return {data, isLoading, isError}
}