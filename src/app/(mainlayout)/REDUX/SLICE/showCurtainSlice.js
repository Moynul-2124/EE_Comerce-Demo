





"use client"
// Redux/counter/curtainSlice.js
import { createSlice } from '@reduxjs/toolkit';

const curtainSlice = createSlice({
  name: 'curtain',
  initialState: {
    active: false,
  },
  reducers: {
    showCurtain: (state) => {
      state.active = true;
    },
    hideCurtain: (state) => {
      state.active = false;
    },
  },
});

export const { showCurtain, hideCurtain } = curtainSlice.actions;
export default curtainSlice.reducer;
