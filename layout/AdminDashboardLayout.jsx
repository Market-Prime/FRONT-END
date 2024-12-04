import React from "react";
import Sidebar from "../src/pages/AdminDashboard/DashNav";
import Header from "../src/pages/AdminDashboard/Header";

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
