import React, { useState } from "react";
import logo from "../../assets/Logo 1.png";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Package,
  List,
  ShoppingCart,
  Users,
  Store,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/adminDashboard" },
  { icon: BarChart2, label: "Analytics", path: "/analytics" },
  { icon: Package, label: "Product Management", path: "/product-management" },
  { icon: List, label: "Products Listing", path: "/products-listing" },
  { icon: ShoppingCart, label: "Order Management", path: "/order-management" },
  { icon: Users, label: "User Management", path: "/user-management" },
  { icon: Store, label: "Vendor Management", path: "/vendor-management" },
  { icon: MessageCircle, label: "Messages", path: "/messages" },
];

function DashNav() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
      className={`bg-white text-blue-900 ${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen transition-all duration-300 flex flex-col shadow-xl shadow-black`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-4">
        {!isCollapsed && (
          <h1 className="text-2xl font-bold">
            <img src={logo} alt="Market Prime Logo" className="w-10" />
            {!isCollapsed && (
              <h1 className="text-xl font-bold text-blue-900">MARKET PRIME</h1>
            )}
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="text-blue-900 focus:outline-none hover:bg-blue-700 rounded-lg p-2 transition duration-200"
        >
          {isCollapsed ? (
            <ChevronLeft className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col h-full py-5">
        <ul className="flex-1 space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-700 text-white"
                    : "text-blue-900 hover:bg-blue-700 hover:text-white"
                }`}
              >
                <item.icon className="h-6 w-6" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Section */}
        <div className="space-y-2 px-2">
          <Link
            to="/settings"
            className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${
              location.pathname === "/settings"
                ? "bg-blue-700 text-blue-900"
                : "text-blue-900 hover:bg-blue-700 hover:text-white"
            }`}
          >
            <Settings className="h-6 w-6" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
          <button className="flex items-center space-x-3 p-2 rounded-lg text-blue-900 hover:bg-blue-700 hover:text-white transition-colors duration-200 w-full">
            <LogOut className="h-6 w-6" />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default DashNav;
