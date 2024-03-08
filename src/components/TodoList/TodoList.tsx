import { Todo } from "../../types/Todo";
import { useQueryTodo } from "../../hooks/useQueryTodo";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { useUpdateTodo } from "../../hooks/useUpdateTodo";
import { TodoItem } from "../TodoRender/TodoRender";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const { data, isLoading } = useQueryTodo();

  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();

  const handleDeleteTodo = (id: string) => {
    if (!window.confirm("삭제하시겠어요?")) {
      return;
    }
    deleteTodo(id);
  };

  const handleUpdateTodo = (id: string, isDone: boolean) => {
    if (!window.confirm("수정하시겠어요?")) {
      return;
    }
    updateTodo({ id, isDone });
  };

  const doList = data.filter((todo) => !todo.isDone);
  const doneList = data.filter((todo) => todo.isDone);

  if (isLoading) {
    return <>리스트 로딩중..</>;
  }
  return (
    <div className={styles.container}>
      <h2>할 일</h2>
      <section className={styles.working}>
        {doList.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
      </section>
      <h2>완료한 일</h2>
      <section className={styles.done}>
        {doneList.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          );
        })}
      </section>
    </div>
  );
};

export default TodoList;
