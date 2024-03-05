// Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between h-16 items-center">
          <div className="flex ">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-2xl">AWR</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                <a
                  href="#home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#project"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Go to your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
