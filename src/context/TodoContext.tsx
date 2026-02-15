import { createContext, useContext, useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[] | null;
}

export const TodoContext = createContext<TodoContextType | null>(null);

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[] | null>([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );

      const data = await response.json();
      setTodos(data);
    } catch (error) {
      throw new Error((error as any).message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const payload: TodoContextType = { todos };

  return (
    <TodoContext.Provider value={payload}>{children}</TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
