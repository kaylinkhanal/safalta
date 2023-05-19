"use client";
import Image from 'next/image'
import Link from 'next/link';
// const Register =()=> {
//   return (
//    <div>
//     <input placeholder="eter your name"/>
//     <input placeholder="eter your name"/>
//     <input placeholder="eter your name"/>
//     <input placeholder="eter your name"/>
//     <button> Register</button>
//     Already have an account yet? <Link href="/login">Sign in</Link> instead
//    </div>
//   )
// }

// export default Register

import { useState } from 'react'

function Register() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  // Function which will validate the input data whenever submit button is clicked.

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

    // Check if the Email is an Empty string or not.

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert('Invalid Form, 0 special characters in password')
      return
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }

  return (
    <div className="main">
      <form>
        {/* Input Field to insert First Name */}
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/* Input Field to insert Last Name */}
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* Input Field to insert Mobile Number */}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        {/* Input Field to insert Email Address of the user */}
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {/* Input Field to insert Password */}
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
        <br/>
   Already have an account yet? <Link href="/login">Sign in</Link> instead
      </form>
    </div>
  )
}

export default Register