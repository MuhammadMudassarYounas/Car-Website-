import { SignInButton } from "@clerk/clerk-react";
import React from "react";

import Hero from "./components/Hero";
import Category from "./components/Category";

import Header from "./components/Header";



const Home=()=>{
 return(
    <div>

      <Hero/>
      <Category/>

      <Header/>

    </div>
 )
}

export default Home;