import { useState, type CSSProperties } from "react";
import { useTodos } from "../context/TodoContext";

const AllTodos = () => {
  const context = useTodos();
  if (!context) return <p>Loading...</p>;
  const { todos } = context;

  if (!todos) return <div>No todos found...</div>;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerpage = 10;
  const totalPages = todos.length / itemsPerpage;

  const currentEndIndex = currentPage * itemsPerpage;
  const currentStartIndex = currentEndIndex - itemsPerpage;

  const currentsTodosSlice = todos.slice(currentStartIndex, currentEndIndex);

  return (
    <div>
      <h1>AllTodos</h1>

      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {currentsTodosSlice &&
            currentsTodosSlice.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.completed ? "Done" : "Not Done"}</td>
                <td>{todo.title}</td>
              </tr>
            ))}
        </tbody>
        {/* <tfoot></tfoot> */}
      </table>
      {/* 
      {currentsTodosSlice &&
        currentsTodosSlice.map((todo) => <p>{todo.title}</p>)} */}

      <div style={paginationDivStyles}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous Page
        </button>

        <div
          style={{
            border: "3px red solid",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Page {currentPage} of {totalPages}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default AllTodos;

const paginationDivStyles: CSSProperties = {
  marginTop: "100px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};
