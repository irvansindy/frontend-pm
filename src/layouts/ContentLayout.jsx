import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import SidebarOverlay from "../components/SidebarOverlay";

const ContentLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <SidebarOverlay />

      <main className="main-content">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default ContentLayout;
