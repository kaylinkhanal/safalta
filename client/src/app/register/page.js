"use client"
import Link from 'next/link';
import '../styles/reg.css';
import {useState} from 'react';


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  
  const { fullName, email, password, confirmPassword, phoneNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        alert('Registration successful');


    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    });

  } else {
    // Registration failed
    const errorData = await response.json();
    alert(errorData.message);
  }
} catch (error) {
  console.log(error);
  alert('An error occurred during registration');
}

  };




  return (
    <form onSubmit={handleSubmit}>
    <div className="Register">
      <input name="fullName" type="text"  value={fullName} onChange={handleChange} placeholder="Full Name" required/><br/>
      <input name="email" type="email"  value={email}
          onChange={handleChange} placeholder="Email" required/><br/>
      <input name="password"  type="password" value={password}
          onChange={handleChange} placeholder="Password"  required/><br/>
      <input name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
          onChange={handleChange} type="password" required/><br/>
      <input name="phoneNumber" type="phoneNumber"  value={phoneNumber}
          onChange={handleChange} placeholder="Phone Number" required/><br/>

      <button className="Register-button" type="submit">Register</button><br/>
      <span className="Register-login-text">
        Already have an account yet? <Link href="/login">Sign in</Link> instead
      </span>
    </div>
    </form>
  ); 
};

export default Register;
