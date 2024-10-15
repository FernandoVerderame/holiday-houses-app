import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="wrapper">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;