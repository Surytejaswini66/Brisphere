// src/redux/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  stayDates: "",
  location: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetBookingForm: () => initialState,
  },
});

export const { setBookingDetails, resetBookingForm } = bookingSlice.actions;

export default bookingSlice.reducer;
