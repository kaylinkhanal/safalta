import Link from 'next/link';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="Login">
      <input name="Email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />

      <button className="Login-button">Login</button>
      <span className="Login-register-text">
        Don't have an account yet? <Link href="/register">Register</Link> instead
      </span>
    </div>
  );
};

export default Login;
