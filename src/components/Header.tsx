import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    
    const handleLogout = ()=>{  
      localStorage.removeItem("token");
      navigate('/')
    }
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/user-list"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  UserManagement
                </Link>
              </li>
              <li>
                <Link
                  to="/offer-list"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  OfferManagement
                </Link>
              </li>
              <div className="mx-70">
            <Link
              to="/"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
