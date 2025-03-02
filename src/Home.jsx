import { SignInButton } from "@clerk/clerk-react";
import React from "react";

import Hero from "./components/Hero";
import Category from "./components/Category";

import Header from "./components/Header";
import MostSearchedCar from "./components/MostSearchedCar";
import InfoSection from "./components/InfoSection";



const Home=()=>{
 return(
    <div>

      <Header/>
      <Hero/>
      <Category/>
       <MostSearchedCar/>
       <InfoSection/>

    </div>
 )
}

export default Home;