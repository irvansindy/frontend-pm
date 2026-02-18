import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
