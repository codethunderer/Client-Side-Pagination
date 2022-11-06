import React from "react";
import {Link,Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
const HomePage = ()=>{
  return (
    <div className="home-page">
      <h1>Welcome to  Walking Buddy </h1>
      <Navbar/>
     <main>
       <Outlet/>
     </main>
    </div>
  )
}

export default HomePage