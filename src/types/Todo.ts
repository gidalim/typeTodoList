export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type UpdateTodoType = Pick<Todo, "id" | "isDone">;
