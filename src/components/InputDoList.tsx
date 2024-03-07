import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/Todo";
import { QUERY_KEYS } from "../hooks/keys.constant";

const InputDoList : React.FC = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) : void=>{
    const {value} = e.target
    setTitle(value)
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>): void=>{
    const {value} = e.target
    setContent(value)
  }

  const handleCreateTodos = async(e : React.MouseEvent<HTMLButtonElement>) : Promise<void> =>{
    e.preventDefault();
    try{

      const newTodo : Todo = {
        id : crypto.randomUUID(),
        title,
        content,
        isDone: false,
      };
    
        await queryClient.invalidateQueries({queryKey : [QUERY_KEYS.TODOLIST]});
    
      setTitle('');
      setContent('');

    }catch(error){
      console.error('todoList 추가실패', error)
    }
  }

  return (
    <>
      <input value={title} 
        placeholder="입력해주세요"
        onChange={handleChangeTitle}/>
      <input value={content} 
        placeholder="입력해주세요"
        onChange={handleChangeContent}/>
      <button onClick={handleCreateTodos}>생성버튼</button>
      </>
  )
}

export default InputDoList