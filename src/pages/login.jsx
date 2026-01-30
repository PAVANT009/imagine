import React from 'react'
import {SignIn} from "@clerk/clerk-react"

export default function Login() {
  return (
    <SignIn path='/auth/login' routing='path'/>
  )
}
