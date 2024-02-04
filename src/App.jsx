import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SessionAttendance from "./pages/SessionAttendance";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/session-attendance" element={<SessionAttendance />} />
        <Route path="/update-user" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
