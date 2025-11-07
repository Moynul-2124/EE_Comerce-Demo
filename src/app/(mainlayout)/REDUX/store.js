



"use client";
import { configureStore } from "@reduxjs/toolkit";
import curtainReducer from "../REDUX/SLICE/showCurtainSlice";
import pageTransitionReducer from "../REDUX/SLICE/pageTransitionSlice";
import sliderReducer from "../REDUX/SLICE/sliderSlice";
import { dataApi } from "../../../api/upload/dataApi";
import productReducer from "./SLICE/productSlice"; // ✅ unify with cart slice
import cardReducer from './SLICE/CardSlice';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer, 
    curtain: curtainReducer,
    pageTransition: pageTransitionReducer,  
    slider: sliderReducer,
    product: productReducer,
    card: cardReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export default store;
