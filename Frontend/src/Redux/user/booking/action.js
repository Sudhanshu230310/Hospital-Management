import * as types from "./types";
import axios from "axios";

// create booking
export const createBooking = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_BOOKING_REQUEST });
    const res = await axios.post(
      `https://clinintel-hospital-management-site.onrender.com/appointments/create`,
      data
    );
    console.log(res);
    // dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: res.data.postData });
  } catch (error) {
    console.log(error);
  }
};
// create patient
export const createPatient = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      `https://clinintel-hospital-management-site.onrender.com/patients/register`,
      data
    );
    return res.data
  } catch (error) {
    console.log(error);
  }
};