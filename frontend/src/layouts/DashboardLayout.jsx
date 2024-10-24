import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Dashboard/Navbar/Navbar.jsx";

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            <header>
                <Navbar />
            </header>
            <div className="bottom-content bg-gray d-flex">
                <div className="sidebar">
                    <ul className="list-group">
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link text-white p-0 ${isActive ? 'fw-bold' : ''}`}
                                to={'/dashboard/apartments'}>
                                Appartamenti
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link text-white p-0 ${isActive ? 'fw-bold' : ''}`}
                                to={'/dashboard/messages'}>
                                Messaggi
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link text-white p-0 ${isActive ? 'fw-bold' : ''}`}
                                to={'/dashboard/reviews'}>
                                Recensioni
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link text-white p-0 ${isActive ? 'fw-bold' : ''}`}
                                to={'/dashboard/images'}>
                                Galleria
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div >
    );
}

export default DashboardLayout;