'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
const Home =()=> {
    const router = useRouter();
    const handleRouting = (action)=>{
        router.push(action);
    }
  return (
   <div>    
       <div className="Header">
        Logo 
        <button onClick={()=>handleRouting('/login')}>Login</button>
        <button onClick={()=>handleRouting('/register')}>Register</button>
       </div>
       <h1>Enter your tracking number here</h1>
       <br/>
       <input placeholder="Tracking Number" />
       
   </div>
  )
}

export default Home