


"use client"
// store/pageTransitionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home', // 'home' | 'resume'
  transitionActive: false,
};

const pageTransitionSlice = createSlice({
  name: 'pageTransition',
  initialState,
  reducers: {
    goToSHOPS(state) {
      state.currentPage = 'shops';
      state.transitionActive = true;
    },
    returnHome(state) {
      state.currentPage = 'home';
      state.transitionActive = false;
    },
    resetTransition(state) {
      state.transitionActive = false;
    },
    goToPRODUCTS(state) {
      state.currentPage = 'products';
      state.transitionActive = true;
    },
    returnHome(state) {
      state.currentPage = 'home';
      state.transitionActive = false;
    },
    resetTransition(state) {
      state.transitionActive = false;
    },
    goToBLOG(state) {
      state.currentPage = 'blog';
      state.transitionActive = true;
    },
    returnHome(state) {
      state.currentPage = 'home';
      state.transitionActive = false;
    },
    resetTransition(state) {
      state.transitionActive = false;
    },
    goToPAGES(state) {
      state.currentPage = 'pages';
      state.transitionActive = true;
    },
    returnHome(state) {
      state.currentPage = 'home';
      state.transitionActive = false;
    },
    resetTransition(state) {
      state.transitionActive = false;
    },
    
  },
});

export const { goToSHOPS,goToPRODUCTS,goToBLOG,goToPAGES, returnHome, resetTransition } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
    