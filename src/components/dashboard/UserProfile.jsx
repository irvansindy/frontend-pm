import { useState, useEffect } from "react";
import { apiFetch } from "../../utils/apiFetch";
import { getUser } from "../../utils/auth";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError("");

        // ── Contoh penggunaan apiFetch ──────────────────────────
        // apiFetch otomatis:
        //   1. Menambahkan Authorization: Bearer <access_token>
        //   2. Jika 401 → coba refresh token
        //   3. Jika refresh gagal → redirect ke halaman login
        const res = await apiFetch("api/v1/users");

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Gagal mengambil data user");
        }

        const data = await res.json();

        // Struktur response: data.data.user (sesuaikan dengan backend)
        setUserData(data.data);
      } catch (err) {
        // Error yang tidak ditangani oleh apiFetch
        // (session expired & network error sudah di-redirect oleh apiFetch)
        if (
          err.message !== "Session expired" &&
          err.message !== "Network error - please login again"
        ) {
          setError(err.message || "Terjadi kesalahan");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Fallback ke data user yang tersimpan di localStorage
  const localUser = getUser();

  return (
    <div className="glass-card" style={{ padding: "1.5rem" }}>
      <div className="card-header" style={{ marginBottom: "1.25rem" }}>
        <div>
          <h2 className="card-title">User Profile</h2>
          <p className="card-subtitle">Data dari endpoint API</p>
        </div>
        <button
          className="card-btn"
          onClick={() => {
            setLoading(true);
            setError("");
            // Re-trigger useEffect dengan cara reset state
            setUserData(null);
            // Panggil ulang fetch manual
            const refetch = async () => {
              try {
                const res = await apiFetch("api/v1/users");
                if (!res.ok) {
                  const errData = await res.json();
                  throw new Error(errData.message || "Gagal mengambil data");
                }
                const data = await res.json();
                setUserData(data.data);
              } catch (err) {
                if (err.message !== "Session expired") {
                  setError(err.message);
                }
              } finally {
                setLoading(false);
              }
            };
            refetch();
          }}
        >
          Refresh
        </button>
      </div>

      {/* ── Loading State ── */}
      {loading && (
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: "1rem",
                borderRadius: "0.5rem",
                background: "var(--glass-bg, rgba(255,255,255,0.05))",
                animation: "pulse 1.5s ease-in-out infinite",
                width: i === 2 ? "60%" : "100%",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Error State ── */}
      {!loading && error && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            color: "#f87171",
            fontSize: "0.875rem",
          }}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={10} />
            <line x1={12} y1={8} x2={12} y2={12} />
            <line x1={12} y1={16} x2={12.01} y2={16} />
          </svg>
          <span>{error}</span>
          {localUser && (
            <span style={{ marginLeft: "auto", opacity: 0.7 }}>
              (menampilkan data lokal)
            </span>
          )}
        </div>
      )}

      {/* ── Data State — dari API atau fallback localStorage ── */}
      {!loading &&
        (userData || localUser) &&
        (() => {
          const display = userData || localUser;
          const initials = display.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

          return (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Avatar + Nama */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--emerald-light, #6ee7b7), var(--emerald, #10b981))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "1rem" }}>
                    {display.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                    {display.email}
                  </div>
                </div>
                {/* Badge sumber data */}
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "0.7rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "9999px",
                    background: userData
                      ? "rgba(16, 185, 129, 0.15)"
                      : "rgba(245, 158, 11, 0.15)",
                    color: userData ? "#10b981" : "#f59e0b",
                    border: `1px solid ${userData ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
                  }}
                >
                  {userData ? "✓ dari API" : "⚠ dari lokal"}
                </span>
              </div>

              {/* Detail Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  { label: "Divisi", value: display.division?.name },
                  { label: "Departemen", value: display.department?.name },
                  { label: "Jabatan", value: display.job?.name },
                  { label: "Lokasi", value: display.location?.name },
                  { label: "NIK", value: display.nik },
                  { label: "Kota", value: display.location?.city?.name },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      padding: "0.6rem 0.75rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        opacity: 0.5,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                      {value || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default UserProfile;
