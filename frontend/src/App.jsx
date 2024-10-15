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
            <Route path="/" element={<PrivatePage />}>

            </Route>

          </Routes>

        </ScrollToTop>
      </AuthProvider >
    </GlobalProvider >
  );
}

export default App;
