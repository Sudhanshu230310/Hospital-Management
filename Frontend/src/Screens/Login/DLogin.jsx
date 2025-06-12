
import React from 'react'
import { useState } from "react"
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AdminLogin,
  DoctorLogin,
  forgetPassword,
  NurseLogin,
} from "../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
import { admin2 } from '../../assets/index'

const notify = (text) => toast(text);

const DLogin = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Nurse");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Nurse") {
        let data = {
          ...formvalue,
          nurseID: formvalue.ID,
        };
        dispatch(NurseLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Doctor") {
        let data = {
          ...formvalue,
          docID: formvalue.ID,
        };
        console.log(data);
        dispatch(DoctorLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };


  return (
    <>
      <ToastContainer />
      <div className='min-h-screen w-full bg-green-600 flex items-center justify-center p-4'>
        <div className='w-full max-w-4xl rounded-2xl bg-white flex flex-col lg:flex-row shadow-2xl overflow-hidden'>
          {/* Welcome Section */}
          <div className='w-full lg:w-1/2 bg-white flex justify-center items-center p-8'>
            <div className='text-center'>
              <div>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl'>Welcome to</h1>
              </div>
              <div>
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl pt-3 lg:pt-5'>Health Care</h1>
              </div>
              {/* <div className='mt-4 flex items-center justify-center'>
                { <span className='font-bold text-sm md:text-base'>Temporary Credentials</span>
              </div>
              <div className='mt-2 flex items-center justify-center'>
                <span className='font-bold text-sm md:text-base'>ID - 1234</span> 
              </div>
              <div className='mt-2 flex items-center justify-center'>
                <span className='font-bold text-sm md:text-base'>Password - 2024@mnc</span>  }
              </div> */}
            </div>
          </div>

          {/* Login Section */}
          <div className='w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 px-4 py-6 lg:px-6 lg:py-8'>
            <div>
              <div className='w-full flex items-center justify-center font-bold text-lg md:text-xl py-2'>
                Login
              </div>
              <div className='w-full flex items-center justify-center py-2 font-bold'>
                <Radio.Group
                  value={placement}
                  onChange={placementChange}
                  className={"radiogroup"}
                  size="small"
                >
                  <Radio.Button value="Nurse" className={"radiobutton text-xs md:text-sm"}>
                    Nurse
                  </Radio.Button>
                  <Radio.Button value="Doctor" className={"radiobutton text-xs md:text-sm"}>
                    Doctor
                  </Radio.Button>
                  <Radio.Button value="Admin" className={"radiobutton text-xs md:text-sm"}>
                    Admin
                  </Radio.Button>
                </Radio.Group>
              </div>
              <div className='flex items-center justify-center pt-1'>
                <img src={admin2} alt="admin" className='h-16 w-16 md:h-20 md:w-20' />
              </div>
            </div>
            
            <div className='mt-4 flex items-center justify-center'>
              <form onSubmit={HandleSubmit} className='w-full max-w-sm'>
                <h3 className='flex justify-center items-center font-bold mt-1 mb-2 text-sm md:text-base'>{placement} ID</h3>
                <input
                  type="number"
                  name="ID"
                  value={formvalue.ID}
                  onChange={Handlechange}
                  required
                  className='rounded-xl w-full px-3 py-2 border border-gray-300 text-sm md:text-base'
                />
                <h3 className='flex justify-center items-center font-bold my-2 text-sm md:text-base'>Password</h3>
                <input
                  type="password"
                  name="password"
                  value={formvalue.password}
                  onChange={Handlechange}
                  required
                  className='rounded-xl w-full px-3 py-2 border border-gray-300 text-sm md:text-base'
                />
                <div className='flex items-center justify-center'>
                  <button 
                    type="submit" 
                    className='w-4/5 bg-green-600 text-white rounded-2xl mt-5 py-2 font-bold text-sm md:text-base hover:bg-green-700 transition-colors'
                  >
                    {Loading ? "Loading..." : "Submit"}
                  </button>
                </div>
                <p className='mt-2 text-center text-xs md:text-sm'>
                  Forget Password?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={showDrawer}
                    className='text-green-600 hover:text-green-700'
                  >
                    Get it on Email !
                  </span>
                </p>

                <Drawer
                  title="Forget Password"
                  placement="left"
                  onClose={onClose}
                  open={open}
                  width={window.innerWidth < 768 ? '90%' : 400}
                >
                  <div className='mb-5'>
                    <label className='text-base md:text-lg mr-3'>Choose Type</label>
                    <select
                      name="type"
                      value={ForgetPassword.type}
                      onChange={HandleForgetPassword}
                      required
                      className='w-full mt-2 p-2 border border-gray-300 rounded'
                    >
                      <option value="">User Type</option>
                      <option value="nurse">Nurse</option>
                      <option value="doctor">Doctor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-base md:text-lg'>
                      Enter Email
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      name="email"
                      value={ForgetPassword.email}
                      onChange={HandleForgetPassword}
                      required
                      className='w-full h-12 rounded border border-gray-300 bg-green-50 text-base mt-2 px-3'
                    />
                  </div>

                  <button 
                    className='bg-green-600 text-white w-1/2 mx-auto mt-5 flex justify-center items-center p-3 text-base border-none rounded cursor-pointer hover:bg-green-700 transition-colors'
                    onClick={HandleChangePassword}
                  >
                    {forgetLoading ? "Loading..." : " Send Mail"}
                  </button>
                </Drawer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DLogin
