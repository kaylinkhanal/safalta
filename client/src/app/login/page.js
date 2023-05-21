"use client";
import Link from 'next/link';
import '../styles/login.css';
import { OutlinedInput } from '@mui/material';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const Login = () => {
  return (
    <div className="Login">
     
      <Input name="Email" size="lg" placeholder="Enter Email" />
      <Input name="password" size="lg" placeholder="Enter Password" type="password" />

      <Button size="md" color="primary" className="Login-button">Login</Button>
      
        Don't have an account yet? <Link href="/register">Register</Link> instead
     
    </div>
  );
};

export default Login;
