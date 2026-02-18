import { getAccessToken, getRefreshToken, saveTokens, clearAuth } from "./auth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SERVICE_ID = parseInt(import.meta.env.VITE_SERVICE_ID);

// ─── Refresh access token menggunakan refresh_token ──────────
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await fetch(`${BASE_URL}api/v1/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      refresh_token: refreshToken,
      service_id: SERVICE_ID,
    }),
  });

  if (!response.ok) {
    // Refresh token juga sudah invalid — paksa logout
    clearAuth();
    window.location.href = "/";
    throw new Error("Refresh token invalid, redirecting to login");
  }

  const data = await response.json();
  // Simpan token baru
  saveTokens(data.data.tokens);
  return data.data.tokens.access_token;
};

// ─── Fetch wrapper dengan auto-retry setelah refresh ─────────
export const apiFetch = async (endpoint, options = {}, _retry = false) => {
  const accessToken = getAccessToken();

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    // Jika 401 dan belum pernah retry → coba refresh token
    if (response.status === 401 && !_retry) {
      try {
        await refreshAccessToken();
        // Retry request asal dengan token baru
        return apiFetch(endpoint, options, true);
      } catch {
        // refreshAccessToken sudah handle redirect, cukup lempar error
        throw new Error("Session expired");
      }
    }

    // Jika 403 atau 401 tanpa token → force logout
    if ((response.status === 401 || response.status === 403) && !accessToken) {
      clearAuth();
      window.location.href = "/";
      throw new Error("No valid token, redirecting to login");
    }

    return response;
  } catch (err) {
    // Handle network/SSL errors
    if (err instanceof TypeError) {
      // Network error (SSL, timeout, CORS, etc)
      console.error("Network error:", err.message);

      // Jika tidak ada token, redirect ke login
      if (!accessToken) {
        clearAuth();
        window.location.href = "/";
        throw new Error("Network error - please login again");
      }

      // Jika ada token, coba refresh
      try {
        await refreshAccessToken();
        return apiFetch(endpoint, options, true);
      } catch {
        throw err;
      }
    }

    throw err;
  }
};
