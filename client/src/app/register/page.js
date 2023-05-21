"use client";
import Link from 'next/link';
import '../styles/reg.css';
import { OutlinedInput } from '@mui/material';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const Register = () => {
  return (
    <div className="Register">
     <br/>
      <Input name="fullName" size="lg" placeholder="Enter Full Name"/>
      <br/>
      <Input name="Email" size="lg" placeholder="Enter Email"/>
     <br/>
      <Input name="password" size="lg" placeholder="Enter Password"/>
      <br/>
      <Input name="confirmPassword" size="lg" placeholder="confirm Password"/>
      <br/>
      <Input name="phoneNumber" size="lg" placeholder="Phone Numberr"/>

      <Button size="md" color="primary" className="Register-button">Register</Button><br/>
      <span className="Register-login-text">
        Already have an account yet? <Link href="/login">Sign in</Link> instead
       
      </span>
    </div>
  );
};

export default Register;
