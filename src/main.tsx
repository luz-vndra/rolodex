import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import router from './router.tsx'
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}

    <TodoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoProvider>
  </StrictMode>,
);
