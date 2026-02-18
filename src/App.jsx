import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";

import MobileMenuToggle from "./components/MobileMenuToggle";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Global Components */}
        <MobileMenuToggle />
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
