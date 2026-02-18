import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Partners from "./pages/Partners";
import ProtectedRoute from "./router/ProtectedRoute";
import PublicRoute from "./router/PublicRoute";

import MobileMenuToggle from "./components/MobileMenuToggle";
import SiteFooter from "./components/SiteFooter";

/**
 * Layout untuk halaman yang dilindungi/protected
 * Semua route di dalamnya akan mendapat perlindungan auth
 */
function ProtectedLayout() {
  return (
    <div className="app">
      <Outlet />
      <MobileMenuToggle />
      <SiteFooter />
    </div>
  );
}

/**
 * Layout untuk halaman publik (login, dll)
 */
function PublicLayout() {
  return (
    <div className="app">
      <Outlet />
      <MobileMenuToggle />
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ─── PUBLIC ROUTES ─── */}
        <Route
          element={
            <PublicRoute>
              <PublicLayout />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* ─── PROTECTED ROUTES ─── */}
        {/* Semua route di dalam ini otomatis protected */}
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/partners" element={<Partners />} />

          {/* Contoh menambah route baru yang protected: */}
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/settings/permissions" element={<Permissions />} /> */}
          {/* <Route path="/settings/approval" element={<ApprovalSettings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
