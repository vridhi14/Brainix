import React, { useState } from 'react' ; 
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import {assets } from '../assets/assets.js'
import { Menu, X } from 'lucide-react';

function Layout(){
    const navigate = useNavigate();
    const [sidebar , setSidebar] = useState(false); 
    return(
        <div className='flex flex-col items-start justify-start h-screen'>
            <nav>
                <img src ={assets.logo} alt="" onClick={()=>navigate('/')}/>
                {
                    sidebar ? <X className='w-6 h-6 text-gray-600 sm:hidden'/> : <Menu className='w-6 h-6 text-gray-600 sm:hidden'/> 
                }
            </nav>
            <Outlet/>
        </div>
    )
}
export default Layout