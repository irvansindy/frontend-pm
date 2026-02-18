import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

/**
 * Bungkus halaman yang memerlukan autentikasi.
 * Cek token SEBELUM render halaman untuk mencegah flash content.
 * Jika belum login → redirect ke halaman login ("/").
 */
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null); // null = checking

  useEffect(() => {
    // Cek auth secara synchronous
    if (!isLoggedIn()) {
      // Token tidak valid, redirect ke login
      navigate("/", { replace: true });
      setIsAuthorized(false);
    } else {
      // Token valid, boleh lanjut
      setIsAuthorized(true);
    }
  }, [navigate]);

  // Selama masih checking (isAuthorized === null), jangan render apa-apa
  // Ini mencegah flash content
  if (isAuthorized === null) {
    return null; // atau return <LoadingSpinner /> jika ada
  }

  // Jika tidak authorized, render Navigate (sebagai fallback)
  if (!isAuthorized) {
    return null;
  }

  // Jika authorized, render halaman
  return children;
};

export default ProtectedRoute;
