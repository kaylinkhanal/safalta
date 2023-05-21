'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Logo from '../components/images/logo.png'


const Home=()=> {
  const router = useRouter();
  const handleRouting =  (action)=>{
    router.push(action)
  }
  return (
    <div className='body'>
      <div className='header'>
      <div className='logo'>
        <Image src={Logo} alt='logo' className='brand'/>
      </div>
      <div className='singing-btn'>
        <button className='login' onClick={()=>handleRouting('/login')}>Login</button>
        <button className='register' onClick={()=>handleRouting('/register')}>Register</button>
        </div>
      </div>
      <div className='Tracking'>
        <h2>
          TRACK & TRACE
        </h2>
        <input className='trackNumber' placeholder='Enter your tracking number'/><button className='track'>Track</button>
        </div>
    </div>
  )
}

export default Home
