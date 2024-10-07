import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage.jsx";
import ApartmentDetail from "./pages/ApartmentDetail.jsx";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivatePage from "./middlewares/PrivatePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <ScrollToTop>

          <Routes>

            {/* Rotte pubbliche */}

            {/* Default Layout */}
            <Route path="/" element={<DefaultLayout />}>

              {/* HomePage */}
              <Route index element={<HomePage />} />

              {/* Appartamenti */}
              <Route path="apartments/:slug" element={<ApartmentDetail />} />

              {/* Contattaci */}
              <Route path="/contact-us" element={<ContactUs />} />

            </Route>

          </Routes>

        </ScrollToTop>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
