import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

/**
 * Bungkus halaman yang hanya bisa diakses jika BELUM login (Public/Guest).
 * Cek token SEBELUM render halaman untuk mencegah flash content.
 * Jika sudah login → redirect ke halaman dashboard ("/dashboard").
 */
const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // true = checking

  useEffect(() => {
    // Cek auth secara synchronous
    if (isLoggedIn()) {
      // Token valid, user sudah login, redirect ke dashboard
      navigate("/dashboard", { replace: true });
      setIsCheckingAuth(false);
    } else {
      // Token tidak valid, user belum login, boleh akses halaman public
      setIsCheckingAuth(false);
    }
  }, [navigate]);

  // Selama masih checking, jangan render apa-apa
  // Ini mencegah flash content
  if (isCheckingAuth) {
    return null; // atau return <LoadingSpinner /> jika ada
  }

  // Render halaman public
  return children;
};

export default PublicRoute;
