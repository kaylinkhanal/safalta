"use client";
import {useEffect} from "react"
import OrderTracking from "./orderTracking/page";
import { useSelector } from "react-redux";
import RiderDashboard from "./rider/page"
import UserDashboard from "./user/page"
import Nav from './components/Nav/page'
//
const Home = () => {
  const { token, role , isLoggedIn} = useSelector((state) => state.user);

const PrimaryPages = ()=>{
  switch(role){
    case 'user':
      return <UserDashboard/>
    case 'rider': 
      return <RiderDashboard/>
    default:
      return  (
      <div>
        <Nav/>
      <OrderTracking/>
      </div>
      )
  }

}

  return (
    <>
   
    <PrimaryPages/>
    </>
  )
  
};

export default Home;
