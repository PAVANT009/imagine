import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import {ClerkLoaded, SignedIn, SignedOut, UserButton} from "@clerk/clerk-react"
import { ModeToggle } from '@/components/mode-toggle'

    const navis = [
        {
            title: "Home",
            to: "/",
        },
        {
            title: "About",
            to: "/about"
        }
    ]


export default function Navbar() {

    const location = useLocation();
    const path = location.pathname;
  return (
    <nav className='flex flex-row justify-between w-[50%]  py-1.5'>
        <div className='flex flex-row text-center items-center gap-2 [&>a]:rounded-md [&>a]:px-1.5 py-2'>
            {
                !path.startsWith("/auth")  && navis.map((navi,i) => {
                    return(
                        <NavLink key={i} className={({isActive}) => isActive ? "bg-amber-300" : "bg-white" + "text-foreground"} to={navi.to}>{navi.title}</NavLink>
                    )

                })
            }
        </div>
         {/* [&>a]:bg-red-400 [&>a]:p-2.5 h-12 [&>a]:rounded-2xl */}

        <ModeToggle/>
        <div className='flex flex-row gap-2 pr-3'>
            <ClerkLoaded>
                <SignedOut>
                    {
                        !path.startsWith("/auth")? <div id='Signedout' className='h-8'></div>:
                        <div className='w-screen flex justify-end gap-1 pr-3 '>
                            <Button asChild>
                                <NavLink to={"/auth/login"}  >
                                    Login
                                </NavLink>
                            </Button>
                            <Button asChild>
                                <NavLink to={"/auth/register"}>Register</NavLink>
                            </Button>
                        </div>
                    }
                </SignedOut>
                <SignedIn>
                    <UserButton
                        userProfileMode='navigation'
                        userProfileUrl='/profile'
                    />
                </SignedIn>
            </ClerkLoaded>
        </div>
    </nav>
  )
}
