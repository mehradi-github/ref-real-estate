import React from "react";
import logo from "./logo.svg";
import { HomeIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="#" className="flex items-center py-4">
              <HomeIcon className="h-8 w-8" />
              <span className="font-semibold text-gray-500">Real Estate</span>
            </a>
          </div>
          <div>
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
