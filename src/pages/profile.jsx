import React from 'react'
import {UserProfile} from "@clerk/clerk-react"

export default function Profile() {
  return (
    <UserProfile path='/auth/profile' routing='path'/>
  )
}
