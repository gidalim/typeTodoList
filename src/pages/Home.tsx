import InputDoList from "../components/InputDoList";
import TodoList from "../components/TodoList";
import { useQueryTodo } from "../hooks/useQueryTodo"

const Home = () => {

  const {isLoading, isError} = useQueryTodo();

  if(isLoading){
    return <>페이지 로딩중</>
  }

  if(isError){
    return <>에러가 났어요</>
  }

  return (
    <div>
      <InputDoList/>
      <TodoList/>
    </div>
  )
}

export default Home