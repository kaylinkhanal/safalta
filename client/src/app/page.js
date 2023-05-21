'use client';

import { OutlinedInput } from '@mui/material';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Image from 'next/image';
import logoImage from './Image/logo.png'; 
import { useRouter } from 'next/navigation';
import Avatar from '../Avatar';

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
            <Button size="md" color="primary" onClick={() => handleRouting('/login')}>Login</Button>
            <Button size="md" color="primary" onClick={() => handleRouting('/register')}>Register</Button>
            <Avatar />
          </div>
        </div>
  
        <div className="Body">
          <h1>Enter your tracking number here</h1>
          <br/>
          <Input size="lg" placeholder="Enter your tracking number"/>
        </div>
      </div>
    );
  };
  
  export default Home;