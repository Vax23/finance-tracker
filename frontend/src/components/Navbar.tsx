import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-black text-white shadow-md flex items-center justify-between px-4">

          <h1 className="text-lg font-semibold">Finance Tracker</h1>

          <div className="flex flex-wrap items-center justify-end gap-2 max-w-full overflow-auto">
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Theme</button>
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Profile</button>
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Notification</button>
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Help</button>
            <Link to="/register" className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Register</Link>
            <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-500">Log in</button>
          </div>

        </nav>
      );
}

export default Navbar;