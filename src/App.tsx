import "./App.css";
import "./index.css";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
