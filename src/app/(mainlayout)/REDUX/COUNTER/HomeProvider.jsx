



"use client"
import React from 'react';
import store from '../store';
import { Provider } from "react-redux";
const HomeProvider = ({children}) => {
    
    
    
    return (
        <div>
            <Provider store={store}>{children}</Provider>
        </div>
    );  
};  

export default HomeProvider;