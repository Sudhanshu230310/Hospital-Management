
import React, { createContext, useContext, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { GiNurseFemale } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHospitalUser } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { MdBedroomChild } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { TbBed } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../../../Context/ContextProvider";
import './Sidebar.css'
import MenuIcon from "../../../Icon/menu";


const SidebarS = () => {
  const {isOpen,setIsOpen}=useContext(ModalContext)
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(()=>!isOpen);
  }

  return (
    <>
      <div className={`overflow-y-visible sticky top-[70px]`}>
        <div style={{ width: isOpen ? "250px" : "70px" }} className={`sidebar bg-gradient-to-br to-green-800 from-green-600`}>
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "180px" : "0px" }}
              className="bars md:pl-4 pl-4"
            >
              <ImMenu className="size-7" onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection pl-3">
            <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize  className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>

            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                onClick={()=>setIsOpen(false)} to={"/nurseProfile"}
              >
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                onClick={()=>setIsOpen(false)}  to={"/addPatient"}
              >
                <div className="icon">
                  <FaHospitalUser className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Patient
                </div>
              </Link>
            ) : null}

            {user?.userType === "nurse" ? (
              <Link
                className="link"
                activeclassname="active"
                onClick={()=>setIsOpen(false)} to={"/bookAppointment"}
              >
                <div className="icon">
                  <BsBookmarkPlus className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/addDoctor"}>
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Doctor
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/addNurse"}>
                <div className="icon">
                  <GiNurseFemale className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Nurse
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/admin"}>
                <div className="icon">
                  <RiAdminLine
                    className="mainIcon"
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Admin
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/addBeds"}>
                <div className="icon">
                  <TbBed className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Beds
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link onClick={()=>setIsOpen(false)} 
                className="link"
                activeclassname="active"
                to={"/addambulance"}
              >
                <div className="icon">
                  <FaAmbulance className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add AMBU
                </div>
              </Link>
            ) : null}
            {/* {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkpayment"}
              >
                <div className="icon">
                  <RiSecurePaymentLine className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Payments
                </div>
              </Link>
            ) : null} */}

            {user?.userType === "doctor" ? (
              <Link onClick={()=>setIsOpen(false)} 
                className="link"
                activeclassname="active"
                to={"/doctorProfile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/rooms"}>
              <div className="icon">
                <MdBedroomChild className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Beds
              </div>
            </Link>
            {user?.userType === "doctor" ? (
              <Link onClick={()=>setIsOpen(false)}  className="link" activeclassname="active" to={"/reports"}>
                <div className="icon">
                  <TbReportMedical className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link onClick={()=>setIsOpen(false)} 
                className="link"
                activeclassname="active"
                to={"/updateAppointment"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Appointments
                </div>
              </Link>
            ) : null}
            {user?.userType === "doctor" ? (
              <Link onClick={()=>setIsOpen(false)} 
                className="link"
                activeclassname="active"
                to={"/createReport"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Create Report
                </div>
              </Link>
            ) : null}
            {/* {user?.userType === "doctor" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/patientdetails"}
              >
                <div className="icon">
                  <TbListDetails className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Patients
                </div>
              </Link>
            ) : null} */}

            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
              }}
              to={"/dLogin"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarS;

// import React, { useState } from "react";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { FaAmbulance } from "react-icons/fa";
// import { GiNurseFemale } from "react-icons/gi";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { SlUserFollow } from "react-icons/sl";
// import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
// import { BiDetail } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import { FaHospitalUser } from "react-icons/fa";
// import { TbReportMedical } from "react-icons/tb";
// import { MdBedroomChild } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { ImMenu } from "react-icons/im";
// import { FiLogOut } from "react-icons/fi";
// import { RiAdminLine } from "react-icons/ri";
// import { TbBed } from "react-icons/tb";
// import { MdDashboardCustomize } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import './Sidebar.css'

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const dispatch = useDispatch();

//   const {
//     data: { user },
//   } = useSelector((state) => state.auth);

//   function toggle() {
//     setIsOpen(!isOpen);
//   }

//   function toggleMobileMenu() {
//     setIsMobileOpen(!isMobileOpen);
//   }

//   function closeMobileMenu() {
//     setIsMobileOpen(false);
//   }

//   // Helper for responsive display
//   const getDisplay = () => window.innerWidth > 1024 ? (isOpen ? "block" : "none") : "block";

//   return (
//     <>
//       {/* Mobile menu button */}
//       <button className="mobile-menu-btn bg-gradient-to-r to-green-800 from-green-600" onClick={toggleMobileMenu}>
//         <ImMenu />
//       </button>

//       {/* Mobile overlay */}
//       <div 
//         className={`mobile-overlay ${isMobileOpen ? 'active' : ''} `}
//         onClick={closeMobileMenu}
//       ></div>

//       <div className="overflow-y-visible sticky top-[70px] lg:top-0 ">
//         <div 
//           style={{ width: window.innerWidth > 1024 ? (isOpen ? "250px" : "70px") : "200px" }} 
//           className={`sidebar${isMobileOpen ? ' mobile-open' : ''}`}
//         >
//           <div className="top_section bg-gradient-to-r to-green-800 from-green-600">
//             <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//               HMS
//             </h1>
//             <div
//               style={{ marginLeft: isOpen ? "50px" : "0px" }}
//               className="bars"
//             >
//               <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
//             </div>
//           </div>
//           <div className="bottomSection bg-gradient-to-r to-green-800 from-green-600">
//             <Link className="link" activeclassname="active" to={"/dashboard"} onClick={closeMobileMenu}>
//               <div className="icon">
//                 <MdDashboardCustomize className="mainIcon" />
//               </div>
//               <div
//                 style={{ display: getDisplay() }}
//                 className="link_text"
//               >
//                 DashBoard
//               </div>
//             </Link>

//             {user?.userType === "nurse" && (
//               <>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/nurseProfile"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <CgProfile className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Profile
//                   </div>
//                 </Link>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/addPatient"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <FaHospitalUser className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add Patient
//                   </div>
//                 </Link>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/bookAppointment"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <BsBookmarkPlus className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Appointments
//                   </div>
//                 </Link>
//               </>
//             )}

//             {user?.userType === "admin" && (
//               <>
//                 <Link className="link" activeclassname="active" to={"/addDoctor"} onClick={closeMobileMenu}>
//                   <div className="icon">
//                     <AiOutlineUserAdd className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add Doctor
//                   </div>
//                 </Link>
//                 <Link className="link" activeclassname="active" to={"/addNurse"} onClick={closeMobileMenu}>
//                   <div className="icon">
//                     <GiNurseFemale className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add Nurse
//                   </div>
//                 </Link>
//                 <Link className="link" activeclassname="active" to={"/admin"} onClick={closeMobileMenu}>
//                   <div className="icon">
//                     <RiAdminLine className="mainIcon" style={{ color: "white" }} />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add Admin
//                   </div>
//                 </Link>
//                 <Link className="link" activeclassname="active" to={"/addBeds"} onClick={closeMobileMenu}>
//                   <div className="icon">
//                     <TbBed className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add Beds
//                   </div>
//                 </Link>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/addambulance"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <FaAmbulance className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Add AMBU
//                   </div>
//                 </Link>
//                 {/* Uncomment if needed
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/checkpayment"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <RiSecurePaymentLine className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Payments
//                   </div>
//                 </Link>
//                 */}
//               </>
//             )}

//             {user?.userType === "doctor" && (
//               <>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/doctorProfile"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <SlUserFollow className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Profile
//                   </div>
//                 </Link>
//                 <Link className="link" activeclassname="active" to={"/reports"} onClick={closeMobileMenu}>
//                   <div className="icon">
//                     <TbReportMedical className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Reports
//                   </div>
//                 </Link>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/updateAppointment"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <BsFillBookmarkCheckFill className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Appointments
//                   </div>
//                 </Link>
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/createReport"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <BiDetail className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Create Report
//                   </div>
//                 </Link>
//                 {/* Uncomment if needed
//                 <Link
//                   className="link"
//                   activeclassname="active"
//                   to={"/patientdetails"}
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="icon">
//                     <TbListDetails className="mainIcon" />
//                   </div>
//                   <div style={{ display: getDisplay() }} className="link_text">
//                     Patients
//                   </div>
//                 </Link>
//                 */}
//               </>
//             )}

//             <Link className="link" activeclassname="active" to={"/rooms"} onClick={closeMobileMenu}>
//               <div className="icon">
//                 <MdBedroomChild className="mainIcon" />
//               </div>
//               <div style={{ display: getDisplay() }} className="link_text">
//                 Beds
//               </div>
//             </Link>

//             <Link
//               className="LogOutPath link"
//               onClick={() => {
//                 dispatch({ type: "AUTH_LOGOUT" });
//                 closeMobileMenu();
//               }}
//               to={"/dLogin"}
//             >
//               <div className="icon">
//                 <FiLogOut />
//               </div>
//               <div style={{ display: getDisplay() }} className="link_text">
//                 Logout
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

