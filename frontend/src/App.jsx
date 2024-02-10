import "./App.css";
import "./components/Header/Header";
import KanbanBoard from "./page/Todo/KanbanBoard";
import { Route, Router } from "react-router-dom";
import Register from "./page/Register/Register";
function App() {
  return (
    <>
      {/* <KanbanBoard /> */}
      <Register />
    </>
  );
}

export default App;
