import { useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContext";

const UserToDos = () => {
  const { userId } = useParams<{ userId: string }>();
  // console.log({ userId });

  const context = useTodos();
  if (!context) return <div>Loading...</div>;
  const { todos } = context;

  const userTodos = () => {
    if (!userId) return [];
    return todos?.filter((todo) => todo.userId === parseInt(userId));
  };

  return (
    <div>
      <h1>ToDos for {`${userId}`}</h1>

      {userTodos()?.map((todo, index) => <p key={todo.id}>{index + 1}: {todo.title}</p>)}
    </div>
  );
};

export default UserToDos;
