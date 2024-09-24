import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import PrivatePage from "./middlewares/PrivatePage.jsx";

function App() {

  return (
    <GlobalProvider>
      <AuthProvider>
        <Routes>



        </Routes>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
