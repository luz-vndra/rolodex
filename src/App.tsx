import "./App.css";
import Names from "./pages/Names";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import UserToDos from "./pages/UserToDos";
import AllTodos from "./pages/AllTodos";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Names />} />
        <Route path='/todos' element={<AllTodos />} />
        <Route path="/todo/:userId" element={<UserToDos />} />
      </Routes>
    </>
  );
}

export default App;
