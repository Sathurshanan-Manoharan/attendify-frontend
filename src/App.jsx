import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SessionAttendance from "./pages/SessionAttendance";
import UpdateUser from "./pages/UpdateUser";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import AddLecturer from "./pages/AddLecturer";
import AddStudent from "./pages/AddStudent";
// import { Login } from "@mui/icons-material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/attendance" element={<SessionAttendance />} />
      <Route path="/updateUser" element={<UpdateUser />} />
      <Route path="/addlecturer" element={<AddLecturer />} />
      <Route path="/addstudent" element={<AddStudent />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
