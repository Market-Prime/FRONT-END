import { Outlet } from "react-router-dom";
import "../../../styles/adminDashboard.css";
import Header from "../partials/header";
import SidePane from "../partials/sidePane";

const AdminLayout1 = () =>{
    return(
        <div className="flex flex-col h-screen relative">
            <SidePane />
            <div className="ml-24 main-cont flex flex-col">
                <Header name={"Eze"} role={"Manager"} profileImg={"https://picsum.photos/200"}/>
                <main className="admin-main scroll-bar p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout1;