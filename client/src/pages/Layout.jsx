import React, { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react";
import { useUser, SignIn } from "@clerk/clerk-react";
import Sidebar from "../components/Sidebar.jsx";

function Layout() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 py-3 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-10">
        <img
          className="cursor-pointer h-12 sm:h-14 w-14 sm:w-16 object-cover rounded-full "
          src={assets.logo}
          alt="Brainix logo"
          onClick={() => navigate("/")}
        /> 
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />\{" "}
        <div className="flex-1 bg-[#F4F7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
export default Layout;
