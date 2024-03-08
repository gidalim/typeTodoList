import { Todo } from "../../types/Todo"
import styles from'./TodoRender.module.css'

type TodoItems = {
  todo : Todo;
  handleDeleteTodo : (id : string) => void;
  handleUpdateTodo : (id : string, isDone: boolean) => void;
}

export const TodoItem: React.FC<TodoItems> = ({todo, handleDeleteTodo, handleUpdateTodo}) =>{
  return (
    <div key={todo.id} className={styles.box}>
      <p className={styles.title}>{todo.title}</p>
      <p className={styles.content}>{todo.content}</p>
      <div className={styles.toggleBtn}>
        <button className={styles.deleteBtn} onClick={()=> handleDeleteTodo(todo.id)}>삭제</button>
        <button className={styles.updateBtn} onClick={()=> handleUpdateTodo(todo.id, !todo.isDone)}>{todo.isDone ? '취소' : '완료'}</button>
      </div>
    </div>
  )
}