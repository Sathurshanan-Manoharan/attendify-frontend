import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SessionAttendance from "./pages/SessionAttendance";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import AddLecturer from "./pages/AddLecturer";
import AddStudent from "./pages/AddStudent";
import Timetable from "./pages/Timetable";
import Login from "./pages/LogIn";
import Sessions from "./pages/Sessions";
import CreateTimetable from "./pages/CreateTimetable";
import Reports from "./pages/Reports";
import CreateTimetableLecturer from "./pages/CreateTimetableLecturer";
import TimetableLecturer from "./pages/TimetableLecturer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route
          path="/sessions/attendance/:id"
          element={<SessionAttendance />}
        />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/addlecturer" element={<AddLecturer />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/createtimetable" element={<CreateTimetable />} />
        <Route path="/reports" element={<Reports />} />
        <Route
          path="/createtimetablelecturer"
          element={<CreateTimetableLecturer />}
        />
        <Route path="/timetablelecturer" element={<TimetableLecturer />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
