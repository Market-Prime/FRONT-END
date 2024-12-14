import { useEffect, useState } from "react";
import Sidebar from "../components/partials/DashNav";
import Header from "../components/partials/Header";
import ApiClient from "../api";

function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            ApiClient.loadProfile()
                .then((data) => {
                    setUserDetails(data);
                })
                .catch((error) => {
                    console.log("Error: ", error);
                });
        };
        ApiClient && fetchData();
    }, [ApiClient]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar isSuperAdmin={userDetails?.admin_class == 0} />

            {/* Main Content Area */}
            <div
                className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
                    isSidebarOpen ? "ml-64" : "ml-0 w-[70%]"
                }`}
            >
                <Header
                    onToggleSidebar={toggleSidebar}
                    staffId={userDetails?.staff_id}
                    type={
                        userDetails?.admin_class == 0
                            ? "Super Admin"
                            : "Manager"
                    }
                    name={`${userDetails?.user?.last_name || "user"} ${
                        userDetails?.user?.first_name || ""
                    }`}
                    image={userDetails?.admin_img}
                />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
