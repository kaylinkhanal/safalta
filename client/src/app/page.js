'use client';
import Image from 'next/image';
import logoImage from './Image/logo.png'; 
import { useRouter } from 'next/navigation';
import Avatar from '../Avatar';
import Input from '@mui/joy/Input';
import './styles/styles.css';

const Home = () => {
    const router = useRouter();
    const handleRouting = (action) => {
      router.push(action);
    };
  
    return (
      <div>
        <div className="Header">
          <div className="Logo"> <Image src={logoImage} alt="Logo" width={155} height={100} /></div>
          <div className="Header-buttons">
            <button onClick={() => handleRouting('/login')}>Login</button>
            <button onClick={() => handleRouting('/register')}>Register</button>
            <Avatar />
          </div>
        </div>
  
        <div className="Body">
          <h1>Enter your tracking number here</h1>
          <br />
          <Input size="lg" placeholder="Enter Tracking Number" />
        </div>
      </div>
    );
  };
  
  export default Home;