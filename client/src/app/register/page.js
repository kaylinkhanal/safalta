import Image from 'next/image'
import Link from 'next/link';
const Register =()=> {
  return (
   <div>
    <input placeholder="eter your name"/>
    <input placeholder="eter your name"/>
    <input placeholder="eter your name"/>
    <input placeholder="eter your name"/>
    <button> Register</button>
    Already have an account yet? <Link href="/login">Sign in</Link> instead
   </div>
  )
}

export default Register