import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./Screens/Login/DLogin";
import AddAdmin from './Screens/Dashboard/Admin/AddAdmin';
import AddDoctor from './Screens/Dashboard/Admin/AddDoctor';
import AddNurse from './Screens/Dashboard/Admin/AddNurse';
import AddBeds from './Screens/Dashboard/Admin/AddBeds';
import AddAmbulance from './Screens/Dashboard/Admin/AddAmbulance';
import Availability from './Screens/Dashboard/Admin/Availability';
import Reports from './Screens/Dashboard/Doctor/Reports';
import UpdateAppointments from './Screens/Dashboard/Doctor/UpdateAppointments';
import CreateReport from './Screens/Dashboard/Doctor/CreateReports';
import DoctorProfile from './Screens/Dashboard/Doctor/DoctorProfile';
import AddPatient from './Screens/Dashboard/Nurse/AddPatient';
import NurseProfile from './Screens/Dashboard/Nurse/NurseProfile'
import BookAppointment from './Screens/Dashboard/Nurse/BookAppointment';
import DashboardStats from './Screens/Dashboard/Common/DashboardStats';
import MainPage from './Screens/user/MainPage';
import Login from './Screens/user/Login';

function App() {
  return (
    // <div className="ml-3">
    //   Hello world
    // </div>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/dLogin" element={<DLogin />} />
      <Route path="/admin" element={<AddAdmin />} />
      <Route path="/addDoctor" element={<AddDoctor/>} />
      <Route path="/addNurse" element={<AddNurse/>} />
      <Route path="/addBeds" element={<AddBeds/>} />
      <Route path="/addAmbulance" element={<AddAmbulance/>} />
      <Route path="/rooms" element={<Availability/>} />
      <Route path="/reports" element={<Reports/>} />
      <Route path="/updateAppointment" element={<UpdateAppointments/>} />
      <Route path="/createReport" element={<CreateReport/>} />
      <Route path="/doctorProfile" element={<DoctorProfile/>} />
      <Route path="/addPatient" element={<AddPatient/>} />
      <Route path="/nurseProfile" element={<NurseProfile/>} />
      <Route path="/bookAppointment" element={<BookAppointment/>} />
      <Route path="/dashboard" element={<DashboardStats/>}></Route>
    </Routes> 
  );
}

export default App;
