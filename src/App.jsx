import "./App.css";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
