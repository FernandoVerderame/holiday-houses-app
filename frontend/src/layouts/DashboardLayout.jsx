import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar/Navbar.jsx";

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;