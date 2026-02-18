import ThemeToggle from "../ThemeToggle";
import NotifyToggle from "../NotifyToggle";
import SearchBox from "../SearchBox";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="page-title">Dashboard Overview</h1>

      <div className="navbar-right">
        <SearchBox />
        <NotifyToggle />
        <ThemeToggle isFloat={false} />
      </div>
    </nav>
  );
};

export default Navbar;
