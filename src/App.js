import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/pages/Homepage";
import Employee from "./Components/pages/Employee";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employee/:employeeID" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
