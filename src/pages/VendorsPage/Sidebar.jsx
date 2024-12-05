import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBoxes } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import logo from "../../assets/Logo 1.png";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const navItems = [
    { path: "/VendorDashboard", label: "Dashboard", icon: LuLayoutDashboard },
    { path: "/VendorDashboard/Product", label: "Product", icon: FaBoxes },
    { path: "/VendorDashboard/Orders", label: "Orders", icon: FaBoxes },
    { path: null, label: "Customers", icon: HiUsers },
  ];

  return (
    <aside
      className={`bg-white text-blue-900 ${
        isCollapsed ? "w-16" : "md:w-64 w-full"
      } min-h-screen transition-all duration-300 flex flex-col shadow-lg`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-4">
        {!isCollapsed && (
          <div className="md:flex flex flex-col items-center space-x-2 ">
            <img src={logo} alt="Market Prime Logo" className="w-10" />
            <h1 className="text-xl font-bold text-blue-900">MARKET PRIME</h1>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="text-blue-900 hover:bg-blue-100 rounded-lg p-2"
        >
          {isCollapsed ? (
            <span className="text-lg">&#x2039;</span>
          ) : (
            <span className="text-lg">&#x203A;</span>
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-4 px-2">
          {navItems.map(({ path, label, icon: Icon }, index) => (
            <li key={index}>
              <Link
                to={path || "#"}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === path
                    ? "bg-blue-700 text-white"
                    : "hover:bg-blue-700 hover:text-white"
                }`}
              >
                <Icon className="h-6 w-6" />
                {!isCollapsed && <span>{label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="space-y-2 px-2 pb-4">
        <Link
          to="/settings"
          className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${
            location.pathname === "/settings"
              ? "bg-blue-700 text-white"
              : "hover:bg-blue-700 hover:text-white"
          }`}
        >
          <IoSettingsOutline className="h-6 w-6" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <button className="flex items-center space-x-3 p-2 rounded-lg text-red-500 hover:bg-blue-700 hover:text-white transition-colors duration-200 w-full">
          <RiLogoutCircleLine className="h-6 w-6" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
