
"use client"
import React from 'react';
import HomeProvider from './REDUX/COUNTER/HomeProvider';


import Curtain from './HomeCompo/Shared/Curtain';
import HomeHero from './HomeCompo/Shared/HomeHero';
import HomeFeature from './HomeCompo/Shared/HomeFeature';
import Title from './Componenets/Fixed/Title';
import ProjectsPage from './HomeCompo/Shared/HomeNew';
import HomePic from './HomeCompo/Shared/HomePic';
import HomeNewTwo from './HomeCompo/Shared/HomeNewTwo';
import Constant from './HomeCompo/FIxed/Constant';
import COnstant2 from './HomeCompo/FIxed/COnstant2';
import BlogHome from './HomeCompo/Shared/BlogHome';
import Constant3 from './HomeCompo/FIxed/Constant3';
import CartToast from '../cart/Compo/CartToast';
import LogIn from './HomeCompo/FIxed/LogIn';



const page = () => {
  return (
    <div className='bg-white min-h-screen text-black'>

      <HomeProvider>


        <LogIn></LogIn>
       
        <Curtain></Curtain>

        <HomeHero></HomeHero>



        <HomeFeature></HomeFeature>


        <Title gud="NEW CAKE" voda="Ensure the Best Quality to Customers"></Title>


        <ProjectsPage></ProjectsPage>

        
          <HomePic></HomePic>
           

        <ProjectsPage></ProjectsPage>
        
        <HomeNewTwo></HomeNewTwo>
      
        <Constant></Constant>
        <COnstant2></COnstant2>
      
      </HomeProvider>

      <Title voda="Our Blog"></Title>

        <BlogHome></BlogHome>

          <Constant3></Constant3>


    </div>
  );
};

export default page;