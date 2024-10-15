import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage.jsx";
import ApartmentDetail from "./pages/ApartmentDetail.jsx";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivatePage from "./middlewares/PrivatePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import NotFound from "./pages/NotFound.jsx";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ApartmentShow from "./pages/ApartmentShow.jsx";
import ApartmentEdit from "./pages/ApartmentEdit.jsx";
import ApartmentIndex from "./pages/ApartmentIndex.jsx";
import ApartmentCreate from "./pages/ApartmentCreate.jsx";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <ScrollToTop>

          <Routes>

            {/* Rotte pubbliche */}
            {/* 404 */}
            <Route path="*" element={<NotFound />} />

            {/* Rotta login */}
            <Route path="login" element={<Login />} />

            {/* Default Layout */}
            <Route path="/" element={<DefaultLayout />}>

              {/* HomePage */}
              <Route index element={<HomePage />} />

              {/* Appartamenti */}
              <Route path="apartments/:slug" element={<ApartmentDetail />} />

              {/* Contattaci */}
              <Route path="/contact-us" element={<ContactUs />} />

            </Route>

            {/* Rotte private */}
            <Route path="/" element={
              <PrivatePage>
                <DashboardLayout />
              </PrivatePage>
            }>

              {/* Appartamenti */}
              <Route path="dashboard" element={<DashboardLayout />}>

                {/* Index */}
                <Route index element={<ApartmentIndex />} />

                <Route path=":slug" >
                  {/* Show */}
                  <Route index element={<ApartmentShow />} />
                  {/* Edit */}
                  <Route path="edit" element={<ApartmentEdit />} />
                </ Route>

                {/* Crea */}
                <Route path="create" element={<ApartmentCreate />} />

              </Route>

            </Route>

          </Routes>

        </ScrollToTop>
      </AuthProvider >
    </GlobalProvider >
  );
}

export default App;
