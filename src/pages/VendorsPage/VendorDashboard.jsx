import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Header from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area - takes up remaining width, flexible */}
      <div className="flex-1 flex flex-col w-full">
        <Header />
        {/* Content will be rendered here based on the route */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
