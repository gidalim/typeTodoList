import InputDoList from "../components/InputDoList/InputDoList";
import TodoList from "../components/TodoList/TodoList";
import { useQueryTodo } from "../hooks/useQueryTodo";

const Home = () => {
  const { isLoading, isError } = useQueryTodo();

  if (isLoading) {
    return <>페이지 로딩중</>;
  }

  if (isError) {
    return <>데이터를 받는데 실패했어요</>;
  }

  return (
    <div>
      <InputDoList />
      <TodoList />
    </div>
  );
};

export default Home;
