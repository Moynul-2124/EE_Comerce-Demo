

"use client"

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  totalItems: 0,
  visibleCount: 3,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    moveNext: (state) => {
      if (state.currentIndex < state.totalItems - state.visibleCount) {
        state.currentIndex += 1;
      }
    },
    movePrev: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
    resetSlider: (state) => {
      state.currentIndex = 0;
    },
  },
});

export const { setTotalItems, moveNext, movePrev, resetSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
