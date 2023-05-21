"use client"
import Link from 'next/link';
import '../styles/login.css';
import {useState} from 'react';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
     });
  
  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful
        alert('Login successful');


    setFormData({
      email: '',
      password: '',
     
    });

  } else {
    //Login failed
    const errorData = await response.json();
    alert(errorData.message);
  }
} catch (error) {
  console.log(error);
  alert('An error occurred during Login');
}

  };



  return (
    <form onSubmit={handleSubmit}>
    <div className="Login">
       <input name="email" type="email"  value={email}
          onChange={handleChange} placeholder="Email" required/><br/>
      <input name="password"  type="password" value={password}
          onChange={handleChange} placeholder="Password"  required/><br/>

      <button type="submit" className="Login-button">Login</button>
      <span className="Login-register-text">
        Don't have an account yet? <Link href="/register">Register</Link> instead
      </span>
    </div>
    </form>
  );
};

export default Login;
