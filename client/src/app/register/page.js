import Image from 'next/image'
import Link from 'next/link';
const Register =()=> {
  return (
   <div>
    <input placeholder="enter your name"/>
    <input placeholder="enter your name"/>
    <input placeholder="enter your name"/>
    <input placeholder="enter your name"/>
    <button style={{backgroundColor:'red'}}> Register</button>
    Already have an account yet? <Link href="/login">Sign in</Link> instead
   </div>
  )
}

export default Register