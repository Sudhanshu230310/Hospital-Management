import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CreatePayment, CreateReport } from '../../../Redux/Datas/action'
import Sidebar from "../Common/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { ModalContext } from "../../../Context/ContextProvider";
import SidebarS from "../Common/SidebarS";
const notify = (text) => toast(text);

const CreateReports = () => {
    const { isOpen,setIsOpen } = useContext(ModalContext);
    const sidebarWidth = isOpen ? "w-64" : "w-16";
    const { data } = useSelector((store) => store.auth);

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const initmed = {
        medName: "",
        dosage: "",
        duration: "",
    };
    const [med, setmed] = useState(initmed);

    const [medicines, setmedicines] = useState([]);

    const HandleMedChange = (e) => {
        setmed({ ...med, [e.target.name]: e.target.value });
    };

    const InitData = {
        docName: "",
        docDepartment: "",
        patientAge: "",
        docMobile: "",
        patientMobile: "",
        patientBloodGroup: "",
        patientGender: "",
        email: "",
        patientDisease: "",
        patientTemperature: "",
        patientWeight: "",
        patientBP: "",
        patientGlucose: "",
        patientName: "",
        extrainfo: "",
        date: "",
        time: "",
        medicines: [],
    };

    const [ReportValue, setReportValue] = useState(InitData);

    const HandleReportChange = (e) => {
        setReportValue({ ...ReportValue, [e.target.name]: e.target.value });
    };

    const HandleMedAdd = (e) => {
        e.preventDefault();
        setmedicines([...medicines, med]);
        setmed(initmed);
    };

    const HandleReportSubmit = (e) => {
        e.preventDefault();
        let data = {
            ...ReportValue,
            medicines,
        };
        try {
            setLoading(true);
            dispatch(CreateReport(data)).then((res) => {
                if (res.message === "Report successfully created") {
                    notify("Report Created Sucessfully");
                    setLoading(false);
                    setReportValue(InitData);
                } else {
                    setLoading(false);
                    notify("Something went Wrong");
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    if (data?.isAuthticated === false) {
        return <Navigate to={"/"} />;
    }

    if (data?.user.userType !== "doctor") {
        return <Navigate to={"/dashboard"} />;
    }

    return (
        <>
            <ToastContainer />
            <div className='flex bg-[rgb(245,245,245)]'>
                <div className={`${sidebarWidth} lg:block hidden transition-all duration-300 h-full `}
                >
                    <Sidebar />
                </div>
                <div className={`lg:hidden block cursor-pointer translate-x-60 pl-10 ${isOpen?"translate-x-60":"translate-x-30"} w-16 h-screen`} ><SidebarS/></div>
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-2 px-12 text-3xl rounded-xl bg-gradient-to-r to-green-800 from-green-600 text-white'>Health Care</h1>
                    </div>
                    <div className='mt-6 flex items-center justify-center mb-8'>
                        <div className='shadow-2xl bg-white w-[80%] rounded-lg'>
                            <form >
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Doctor Name</h3>
                                    <input
                                        type="text"
                                        placeholder="   Full Name"
                                        name="docName"
                                        value={ReportValue.docName}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Department</h3>
                                    <input
                                        type="text"
                                        placeholder="   Department"
                                        name="docDepartment"
                                        value={ReportValue.docDepartment}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Doctor Mobile</h3>
                                    <input
                                        type="text"
                                        placeholder="   Number"
                                        name="docMobile"
                                        value={ReportValue.docMobile}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Name</h3>
                                    <input
                                        type="text"
                                        placeholder="   Full Name"
                                        name="patientName"
                                        value={ReportValue.patientName}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Patient Age</h3>
                                    <input
                                        type="number"
                                        placeholder="   Age"
                                        name="patientAge"
                                        value={ReportValue.patientAge}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%]'>Patient Mobile</h3>
                                    <input
                                        type="text"
                                        placeholder="   Number"
                                        name="patientMobile"
                                        value={ReportValue.patientMobile}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center  font-bold w-[21%] '>Email</h3>
                                    <input
                                        type="email"
                                        placeholder="   abc@abc.com"
                                        name="email"
                                        value={ReportValue.email}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Gender</h3>
                                    <select
                                        name="patientGender"
                                        value={ReportValue.patientGender}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF] border border-gray-800 rounded-lg'
                                    >
                                        <option value="   Choose Gender ">Choose Gender</option>
                                        <option value="   Male" >Male</option>
                                        <option value="   Female">Female</option>
                                        <option value="   Others">Others</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Blood Group</h3>
                                    <select
                                        name="patientBloodGroup"
                                        value={ReportValue.patientBloodGroup}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF] border border-gray-800 rounded-lg'
                                    >
                                        <option value="   Choose Blood Group ">Select</option>
                                        <option value="   A+">A+</option>
                                        <option value="   A-">A-</option>
                                        <option value="   B+">B+</option>
                                        <option value="   B-">B-</option>
                                        <option value="   AB+">AB+</option>
                                        <option value="   AB-">AB-</option>
                                        <option value="   O+">O+</option>
                                        <option value="   O-">O-</option>
                                    </select>
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Disease</h3>
                                    <input
                                        type="text"
                                        placeholder=" Disease"
                                        name="patientDisease"
                                        value={ReportValue.patientDisease}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-2 text-[#A8A3AF] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Temperature</h3>
                                    <input
                                        type="number"
                                        placeholder="   99^C"
                                        name="patientTemperature"
                                        value={ReportValue.patientTemperature}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Weight</h3>
                                    <input
                                        type="number"
                                        placeholder="   75 KG"
                                        name="patientWeight"
                                        value={ReportValue.patientWeight}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Blood Pressure</h3>
                                    <input
                                        type="number"
                                        placeholder="   140/90 mmHg"
                                        name="patientBP"
                                        value={ReportValue.patientBP}
                                        onChange={HandleReportChange}
                                        required
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Patient Glucose</h3>
                                    <input
                                        type="number"
                                        placeholder="   99 mg/dL"
                                        name="patientGlucose"
                                        value={ReportValue.patientGlucose}
                                        onChange={HandleReportChange}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] border border-gray-800 rounded-lg'
                                    />
                                </div>

                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Medicines</h3>
                                    <input
                                        type="text"
                                        placeholder="   PCM"
                                        name="medName"
                                        value={med.medName}
                                        onChange={HandleMedChange}
                                        className='bg-[rgb(245,245,245)] h-[50px] mr-4 border border-gray-800 rounded-lg'
                                    />
                                    <select
                                        name="duration"
                                        onChange={HandleMedChange}
                                        required
                                        className='bg-[rgb(245,245,245)]  h-[50px] pl-2 text-[#A8A3AF] mr-4 border border-gray-800 rounded-lg'
                                    >
                                        <option value="   Duration">Duration</option>
                                        <option value="   After Meal">After Meal</option>
                                        <option value="   Before Meal">Before Meal</option>
                                    </select>
                                    <select
                                        name="dosage"
                                        onChange={HandleMedChange}
                                        required
                                        className='bg-[rgb(245,245,245)] mr-2 h-[50px] pl-2 text-[#A8A3AF] px-5 border border-gray-800 rounded-lg'
                                    >
                                        <option value="   Dosage">Dosage</option>
                                        <option value="   1">1</option>
                                        <option value="   2">2</option>
                                        <option value="   3">3</option>
                                    </select>
                                    <input
                                        type="submit"
                                        value={"Add"}
                                        onClick={HandleMedAdd}
                                        className='bg-[rgb(245,245,245)] h-[50px] px-10 border border-gray-800 rounded-lg'
                                    />
                                    {/* <input type="submit" value={"Add"} onClick={HandleMedAdd} /> */}
                                </div>
                                <div className='flex mx-10 my-3 '>
                                    <h3 className='flex items-center font-bold w-[21%] '>Date</h3>
                                    <input
                                        type="date"
                                        placeholder="   dd-mm-yyyy"
                                        name="date"
                                        value={ReportValue.date}
                                        onChange={HandleReportChange}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3 border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex mx-10 my-3'>
                                    <h3 className='flex items-center font-bold w-[21%] '>Time</h3>
                                    <input
                                        type="time"
                                        name="time"
                                        value={ReportValue.time}
                                        onChange={HandleReportChange}
                                        className='bg-[rgb(245,245,245)] w-[80%] h-[50px] pl-3 border border-gray-800 rounded-lg'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button onClick={HandleReportSubmit} className="px-10 py-2 bg-gradient-to-r to-green-800 from-green-600 rounded-lg text-white mb-4">
                                        {loading ? "Loading..." : "Generate Report"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CreateReports
