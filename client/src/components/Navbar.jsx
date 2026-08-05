import React from 'react'
import { assets } from '../assets/assets.js'
import {ArrowRight}  from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {useClerk,useUser,UserButton,SignInButton,SignUpButton,} from "@clerk/clerk-react";


function Navbar() {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    
    return (
  <div className="fixed z-10 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">

    <img
  src={assets.logo}
  alt="logo"
  className="h-12 sm:h-14 w-14 sm:w-16 rounded-full object-cover cursor-pointer"
  onClick={() => navigate("/")}
/>

    {
      user ? (
        <UserButton appearance={{elements: {avatarBox: "!w-12 !h-12"}}} />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      )
    }

  </div>
);
}


export default Navbar
