import { useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import NotifyToggle from "../NotifyToggle";
import SearchBox from "../SearchBox";

const Navbar = () => {
  const location = useLocation();

  // Mapping path ke title
  const titleMap = {
    "/dashboard": "Dashboard Overview",
    "/partners": "Partners Management",
    "/users": "Users Management",
    "/analytics": "Analytics",
    "/settings": "Settings",
  };

  // Ambil title berdasarkan current path, atau gunakan default
  const currentTitle = titleMap[location.pathname] || "Dashboard";

  return (
    <nav className="navbar">
      <h1 className="page-title">{currentTitle}</h1>

      <div className="navbar-right">
        <SearchBox />
        <NotifyToggle />
        <ThemeToggle isFloat={false} />
      </div>
    </nav>
  );
};

export default Navbar;
