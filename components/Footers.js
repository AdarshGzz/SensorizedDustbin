// Footer.js
import React from "react";

function Footer() {
  const appName = "AWR";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <p className="text-sm">
        &copy; {currentYear} {appName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
