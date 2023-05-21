import Link from 'next/link';
import '../styles/reg.css';


const Register = () => {
  return (
    <div className="Register">
      <input name="fullName" placeholder="Full Name" /><br/>
      <input name="Email" placeholder="Email" /><br/>
      <input name="password" placeholder="Password" type="password" /><br/>
      <input name="confirmPassword" placeholder="Confirm Password" type="password" /><br/>
      <input name="phoneNumber" placeholder="Phone Number" /><br/>

      <button className="Register-button">Register</button><br/>
      <span className="Register-login-text">
        Already have an account yet? <Link href="/login">Sign in</Link> instead
      </span>
    </div>
  );
};

export default Register;
