import React from 'react'
import {UserProfile} from "@clerk/clerk-react"

export default function Profile() {
  return (
    <div className="flex justify-center items-center w-full h-[93%] pt-4">
      <UserProfile
       path='/profile' 
       routing='path'
        appearance={{
          elements: {
            rootBox: "mt-10",    
          },
        }}
      />
    </div>
  )
}
