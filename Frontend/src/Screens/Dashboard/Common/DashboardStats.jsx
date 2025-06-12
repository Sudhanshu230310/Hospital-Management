import React, { useContext, useEffect } from "react";
import { Menu, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  MdPersonAdd,
  MdPayment,
  MdOutlineBedroomParent,
  MdOutlineBedroomChild,
} from "react-icons/md";
import { FaUserNurse, FaBed, FaAmbulance } from "react-icons/fa";
import { RiEmpathizeLine, RiAdminLine } from "react-icons/ri";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

import Sidebar from "./Sidebar";
import { ModalContext } from "../../../Context/ContextProvider";
import { GetAllData, GetPatients } from "../../../Redux/Datas/action";
import MenuIcon from "../../../Icon/menu";
import SidebarS from "./SidebarS";

const DashboardStats = () => {
  const { isOpen,setIsOpen } = useContext(ModalContext);
  const dispatch = useDispatch();

  // Pull patients list and dashboard counts from Redux store
  const { patients } = useSelector((store) => store.data.patients);
  const {
    dashboard: { data },
  } = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(GetPatients());
    dispatch(GetAllData());
  }, [dispatch]);

  // Toggle sidebar width
  const sidebarWidth = isOpen ? "w-64" : "w-16";

  // Table column definitions
  const columns = [
    { title: "Name", dataIndex: "patientName", key: "patientName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    { title: "Blood Group", dataIndex: "bloodGroup", key: "bloodGroup" },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  return (
    <div className="flex bg-[rgb(245,245,245)] h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${sidebarWidth} lg:block hidden transition-all duration-300 overflow-hidden`}
      >
        <Sidebar />
      </div>
      <div className={`lg:hidden block cursor-pointer translate-x-60 pl-10 ${isOpen?"translate-x-60":"translate-x-30"} w-16`} ><SidebarS/></div>
      {/* Main content */}
      <div className="flex-1 p-4 lg:p-8 overflow-auto transition-all duration-300">
        <div className="flex justify-center">
          <h1 className="font-bold py-2 px-4 lg:py-3 lg:px-12 text-xl lg:text-3xl rounded-xl bg-gradient-to-r from-green-600 to-green-800 text-white text-center">
            Welcome to Health and Care
          </h1>
        </div>

        {/* STATS */}
        <section className="mt-8 lg:mt-12">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">STATS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Doctors */}
            <StatCard icon={<MdPersonAdd size={isOpen ? 80 : 60} />} count={data?.doctor} label="Doctors" />
            {/* Nurses */}
            <StatCard icon={<FaUserNurse size={isOpen ? 60 : 50} />} count={data?.nurse} label="Nurses" />
            {/* Patients */}
            <StatCard icon={<RiEmpathizeLine size={isOpen ? 65 : 55} />} count={data?.patient} label="Patients" />
            {/* Admins */}
            <StatCard icon={<RiAdminLine size={isOpen ? 60 : 50} />} count={data?.admin} label="Admins" />
            {/* Ambulances */}
            <StatCard icon={<FaAmbulance size={isOpen ? 60 : 50} />} count={data?.ambulance} label="Ambulances" />
            {/* Beds */}
            <StatCard icon={<FaBed size={isOpen ? 60 : 50} />} count={data?.bed} label="Beds" />
            {/* Appointments */}
            <StatCard icon={<BsFillBookmarkCheckFill size={isOpen ? 50 : 40} />} count={data?.appointment} label="Appointments" />
            {/* Reports */}
            <StatCard icon={<MdPayment size={isOpen ? 60 : 50} />} count={data?.report} label="Reports" />
          </div>
        </section>

        {/* PATIENT DETAILS */}
        <section className="mt-12">
          <h2 className="font-bold text-xl lg:text-3xl mb-4">PATIENT DETAILS</h2>
          <div className="shadow-2xl overflow-x-auto rounded-lg bg-white">
            <Table columns={columns} dataSource={patients} scroll={{ x: 800 }} />
          </div>
        </section>
      </div>
    </div>
  );
};

// A small reusable stat‐card component
const StatCard = ({ icon, count, label }) => (
  <div className="h-[100px] flex items-center justify-center bg-white rounded-xl shadow-2xl">
    <div className="mr-4">{icon}</div>
    <div className="ml-2 flex flex-col">
      <div className="text-xl lg:text-2xl font-bold text-center">
        {count ?? "--"}
      </div>
      <div className="mt-1 text-sm lg:text-xl font-bold">{label}</div>
    </div>
  </div>
);

export default DashboardStats;
