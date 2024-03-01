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
import Timetable from "./pages/Timetable";
import Login from "./pages/LogIn";
import Sessions from "./pages/Sessions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/attendance" element={<SessionAttendance />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/addlecturer" element={<AddLecturer />} />
        <Route path="/addstudent" element={<AddStudent />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
