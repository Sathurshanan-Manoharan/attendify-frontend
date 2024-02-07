import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SessionAttendance from "./pages/SessionAttendance";
import UpdateUser from "./pages/UpdateUser";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/attendance" element={<SessionAttendance />} />
      <Route path="/login" element={<UpdateUser />} />
    </Route>
  )
);


function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
