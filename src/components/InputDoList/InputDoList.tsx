import { useState } from "react";
import { Todo } from "../../types/Todo";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import styles from './InputDoList.module.css'

const InputDoList : React.FC = () => {
  const {addTodo} = useCreateTodo();

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
      
    const newTodo : Todo = {
        id : crypto.randomUUID(),
        title,
        content,
        isDone: false
      };

      addTodo(newTodo);
      setTitle('');
      setContent('');
    
  }

  return (
    <div className={styles.container}>
      <input value={title} 
        placeholder="입력해주세요"
        onChange={handleChangeTitle}
        />
      <input value={content} 
        placeholder="입력해주세요"
        onChange={handleChangeContent}
        />
      <button onClick={handleCreateTodos}>생성버튼</button>
      </div>
  )
}

export default InputDoList