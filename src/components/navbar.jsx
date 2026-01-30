import React from 'react'
import { NavLink, useLocation } from 'react-router'
import { Button } from './ui/button'
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react"

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
    <nav className='flex flex-row justify-between h-[7%]  py-1.5'>
        <div>
            <h1 className='font-bold text-3xl ml-5'>Logo</h1>
        </div>
        <div className='flex flex-row text-center items-center gap-2 [&>a]:rounded-md [&>a]:px-1.5 py-2'>
            {
                !path.startsWith("/auth")  && navis.map((navi,i) => {
                    return(
                        <NavLink key={i} className={({isActive}) => isActive ? "bg-amber-300" : "bg-white "} to={navi.to}>{navi.title}</NavLink>
                    )

                })
            }
        </div>
         {/* [&>a]:bg-red-400 [&>a]:p-2.5 h-12 [&>a]:rounded-2xl */}

        <div className='flex flex-row gap-2 pr-3'>
            <SignedOut>
                {
                    path.startsWith("/auth")? <div className='h-8'></div>:
                    <>
                        <Button asChild>
                            <NavLink to={"/auth/login"} >
                                Login
                            </NavLink>
                        </Button>
                        <Button asChild>
                            <NavLink to={"/auth/register"}>Register</NavLink>
                        </Button>
                    </>
                }
            </SignedOut>
            <SignedIn>
                <UserButton
                    userProfileMode='navigation'
                    userProfileUrl='/auth/profile'
                />
            </SignedIn>
        </div>
    </nav>
  )
}
