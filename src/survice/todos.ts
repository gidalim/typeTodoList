import instance from "../api";
import { Todo } from "../types/Todo";

export const getTodoList = async () : Promise<Todo[]>=>{
  const response = await instance.get<Todo[]>(`/Todo`)
  return response.data
}

export const createDoList = async(doList: Todo) : Promise<Todo> =>{
  const response = await instance.post(`/Todo`, doList)
  return response.data
}

export const updateDoList = async ({id, isDone} : {id: string; isDone: boolean}) : Promise<Todo> =>{
  const response = await instance.patch(`/Todo/${id}`, {isDone});
  return response.data;
}

export const deleteDoList = async( id: string) : Promise<void> =>{
  const response = await instance.delete(`/Todo/${id}`);
  return response.data
}