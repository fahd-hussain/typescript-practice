interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, updatedTodo: Partial<Todo>) => {
  return { ...todo, ...updatedTodo };
};

const todo1: Todo = {
  title: "Todo 1",
  description: "Todo 1",
};

console.log("Todo 1", todo1);

const todo2: Todo = updateTodo(todo1, { description: "It is todo 2 now" });

console.log("Todo 2", todo2);
