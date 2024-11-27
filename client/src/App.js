import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"; // Import the ContactUs component
import DonateNow from "./pages/DonateNow"; // Import the DonateNow component
import RequestBlood from "./pages/RequestBlood"; // Import the new RequestBlood component
import BloodInventory from "./pages/BloodInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } 
        />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<DonateNow />} />
        <Route path="/request" element={<RequestBlood />} /> 
        <Route path="/inventory" element={<BloodInventory />} /> 
      </Routes>
    </div>
  );
}

export default App;