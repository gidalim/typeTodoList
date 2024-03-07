

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
