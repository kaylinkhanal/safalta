"use client";
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
      return <OrderTracking/>
  }

}

  return (
    <>
    <Nav/>
    <PrimaryPages/>
    </>
  )
  
};

export default Home;
