import {  useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router';
import React from 'react'

export default function Provider({children}) {

    const {isSignedIn, isLoaded} = useAuth();

    if(!isLoaded) return <div>Loading</div>

    if(!isSignedIn) {
        return <Navigate to={"/auth/login"}/>
    }
  return children
}
