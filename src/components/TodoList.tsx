import { Todo } from "../types/Todo";
import { useGetTodo } from "../hooks/useGetTodo";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";

export type TodoItems = {
  todo : Todo;
  handleDeleteTodo : (id : string) => void;
  handleUpdateTodo : (id : string, isDone: boolean) => void;
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

  const {data = [], isLoading} = useGetTodo();


  const { mutate : deleteTodo } = useDeleteTodo();
  const { mutate : updateTodo } = useUpdateTodo(updateDoList);

  const handleDeleteTodo = (id: string) =>{
    deleteTodo (id);
  };

  const handleUpdateTodo = (id:string, isDone : boolean) =>{
    updateTodo ({id, isDone});
  }

  const doList = data.filter(todo => !todo.isDone);
  const doneList  = data.filter(todo => todo.isDone);

  if(isLoading){
    return <>리스트 로딩중..</>
  }
  return (<>
    <div>
      <h2>할 일</h2>
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
      <h2>완료한 일</h2>
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