import instance from "../api";
import { UpdateTodoType } from "../hooks/useUpdateTodo";
import { Todo } from "../types/Todo";

export const getTodoList = async () : Promise<Todo[]>=>{
  const response = await instance.get(`/Todo`)
  return response.data
}

export const createDoList = async(doList: Todo) : Promise<Todo> =>{
  const response = await instance.post(`/Todo`, doList)
  return response.data
}

export const updateDoList = async (data : UpdateTodoType) : Promise<Todo> =>{
  const response = await instance.patch(`/Todo/${data.id}`, {isDone : data.isDone});
  return response.data;
}

export const deleteDoList = async( id: string) : Promise<void> =>{
  const response = await instance.delete(`/Todo/${id}`);
  return response.data
}