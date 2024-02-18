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
import {initializeApp} from 'firebase/app';
import { getApps } from 'firebase/app';
import 'firebase/auth';
import React, {useEffect} from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/attendance" element={<SessionAttendance />} />
      <Route path="/updateUser" element={<UpdateUser />} />
      <Route path="/addlecturer" element={<AddLecturer />} />
      <Route path="/addstudent" element={<AddStudent />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

// Config for firebase



function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAt94J4hukYuKo2w-i5lMDnMsxQtVlFzpY",
    authDomain: "attendify-e0e8f.firebaseapp.com",
    projectId: "attendify-e0e8f",
    storageBucket: "attendify-e0e8f.appspot.com",
    messagingSenderId: "501326192763",
    appId: "1:501326192763:web:12133c32ce8f3b998282de",
    measurementId: "G-FGVM6SYHYX"
  };
  //Initialize Firebase
  useEffect(() => {
    if (!getApps().length) {
      initializeApp(firebaseConfig);
      console.log("innitialized");
    }
    
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
