import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  
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
              <li>
                <Link
                  to="/coin-list"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  CoinManagement
                </Link>
              </li>
              <div className="mx-70">
            {/* <Link
              to="/logout"
            >
              Logout
            </Link> */}
            {/* You can use an icon instead of text for the logout button */}
            {/* Example: <LogoutIcon className="text-gray-900 dark:text-white" /> */}
          </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
