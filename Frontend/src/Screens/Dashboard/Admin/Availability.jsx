import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { dischargePatient, GetBeds } from '../../../Redux/Datas/action'
import Sidebar from '../Common/Sidebar'
import { Space, Table, Tag } from 'antd';
import { ModalContext } from "../../../Context/ContextProvider";
import SidebarS from "../Common/SidebarS";



const Availability = () => {
    const { isOpen,setIsOpen } = useContext(ModalContext);
    const sidebarWidth = isOpen ? "w-64" : "w-16";
    const { data } = useSelector((store) => store.auth);

    const dispatch = useDispatch();

    const { beds } = useSelector((state) => state.data);

    const DischargePatient = (_id) => {
        let data = {
            occupied: "available",
            _id,
        };
        dispatch(dischargePatient(data));
    };

    useEffect(() => {
        dispatch(GetBeds());
    }, [dispatch]);

    if (data?.isAuthticated === false) {
        return <Navigate to={"/"} />;
    }

    return (


        <>
            <div className="flex bg-[rgb(245,245,245)]">
                <div className={`${sidebarWidth} lg:block hidden transition-all duration-300 `}
                >
                    <Sidebar />
                </div>
                <div className={`lg:hidden block cursor-pointer translate-x-60 pl-10 ${isOpen?"translate-x-60":"translate-x-30"} w-16`} ><SidebarS/></div>
                <div className='mt-8 w-full'>
                    <div className='w-inherit  flex items-center justify-center'>
                        <h1 className='font-bold border py-2 px-12 text-3xl rounded-xl bg-gradient-to-r to-green-800 from-green-600 text-white'>Health Care</h1>
                    </div>
                    <div className="w-inherit  mx-10 mt-3">
                        <table className="w-full shadow-2xl">
                            <thead className="bg-gradient-to-r to-green-800 from-green-600 text-white font-bold">
                                <tr>
                                    <th className="py-3">Room</th>
                                    <th className="py-3">Bed</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3">Patient</th>
                                    <th className="py-3">Disease</th>
                                    <th className="py-3">Doctor</th>
                                    <th className="py-3">Discharge</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold text-center">
                                {beds?.map((ele) => {
                                    return (
                                        <tr >
                                            <td className="py-3 ">{ele.roomNumber}</td>
                                            <td className="py-3">{ele.bedNumber}</td>
                                            <td
                                                style={{
                                                    color:
                                                        ele.occupied === "available" ? "green" : "orange",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {ele.occupied}
                                            </td>
                                            <td>
                                                {ele.patientID
                                                    ? ele.patientID.patientName
                                                    : "No Data"}
                                            </td>
                                            <td>
                                                {ele.patientID?.disease
                                                    ? ele.patientID.disease
                                                    : "No Data"}
                                            </td>
                                            <td>
                                                {ele.patientID?.docID
                                                    ? ele.patientID.docID.docName
                                                    : "No Data"}
                                            </td>
                                            <td>
                                                <button
                                                    disabled={ele.occupied === "available"}
                                                    style={{
                                                        border: "none",
                                                        outline: "none",
                                                        background: "transparent",
                                                        color:
                                                            ele.occupied === "available" ? "gray" : "red",
                                                        cursor:
                                                            ele.occupied === "available" ? "" : "pointer",
                                                    }}
                                                    onClick={() => DischargePatient(ele._id)}
                                                >
                                                    Discharge
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* <Table columns={columns} dataSource={data} className="w-full " /> */}

                    </div>
                </div>
            </div>
        </>

    )
}

export default Availability
