import { Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar/Navbar.jsx";

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            <header>
                <Navbar />
            </header>
            <div className="bottom-content d-flex">
                <div className="sidebar">
                    <ul>
                        <li>Appartamenti</li>
                        <li>Messaggi</li>
                        <li>Recensioni</li>
                    </ul>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;