import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage.jsx";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivatePage from "./middlewares/PrivatePage.jsx";

function App() {

  return (
    <GlobalProvider>
      <AuthProvider>
        <Routes>

          {/* Rotte pubbliche */}

          {/* Default Layout */}
          <Route path="/" element={<DefaultLayout />}>

            {/* HomePage */}
            <Route index element={<HomePage />} />
          </Route>

        </Routes>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
