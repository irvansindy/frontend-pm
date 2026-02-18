import ThemeToggle from "../components/ThemeToggle";

export default function AuthLayout({ children }) {
  return (
    <>
      {/* Animated Background */}
      <div className="background"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div className="login-page">
        <ThemeToggle />
        {children}
      </div>
    </>
  );
}
