import { Todo } from "../types/Todo";
import { useGetTodo } from "../hooks/useGetTodo";

export type TodoItems = {
  todo : Todo;
  handleDeleteTodo : (id : string) => Promise<void>;
  handleUpdateTodo : (id : string, isDone: boolean) => Promise<void>;
}


export const TodoItem: React.FC<TodoItems> = ({todo, handleDeleteTodo, handleUpdateTodo}) =>{
  return (
    <div key={todo.id}>
      <li>{todo.title}</li>
      <li>{todo.content}</li>
      <button onClick={()=> handleDeleteTodo(todo.id)}>삭제</button>
      <button onClick={()=> handleUpdateTodo(todo.id, todo.isDone)}>{todo.isDone ? '취소' : '완료'}</button>
    </div>
  )
}


const TodoList :React.FC = () => {

  const {data, isLoading} = useGetTodo();
  const doList : Todo[]  = data.filter(todo => !todo.isDone);
  const doneList : Todo[]  = data.filter(todo => todo.isDone);

  if(isLoading){
    return <>리스트 로딩중..</>
  }
  return (<>
    <div>
      {doList.map((todo : Todo)=>{
        return (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          />
          )
        })}
    </div>
    <div>
      {doneList.map((todo : Todo)=>{
        return (
          <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          />
          )
      })}
    </div>
  </>
  )
}

export default TodoList