import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div className="w-full flex justify-center mb-16">
        <div className="max-w-4xl">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
