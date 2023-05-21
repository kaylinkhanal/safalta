import Image from 'next/image'
import Link from 'next/link'

const Login=()=> {
  return (
      <div>
    <input placeholder="enter your mobile number"/> 
    <br/>
    <br/>
    <input placeholder="enter your password"/>
    <br/>
    <br/>
    <button>login</button>
    <br/>
    <br/>
    Already haven't an account yet? <Link href="/register"> Sing up</Link> Instead
    </div>
  )
}

export default Login;