import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Wrench } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User navigated to non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white">
      <div className="text-center">
        <Wrench className="w-16 h-16 text-[#ff6b35] mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#ff6b35] hover:text-[#ff8555] underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
