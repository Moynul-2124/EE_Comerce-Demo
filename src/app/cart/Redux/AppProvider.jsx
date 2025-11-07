

  "use client"
  import React from 'react';
  
  import store from "../../(mainlayout)/REDUX/store"
import { Providers } from '../../PRO/Providers';
  const AppProvider = ({children}) => {
    return (
      <div>
       <Providers store={store}>{children}</Providers>
      </div>
    );
  };

  export default AppProvider;