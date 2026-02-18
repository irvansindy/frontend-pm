import { useSidebar } from "../contexts/SidebarContext";
import "./SidebarOverlay.css";

const SidebarOverlay = () => {
  const { isOpen, closeSidebar } = useSidebar();

  if (!isOpen) return null;

  return <div className="sidebar-overlay" onClick={closeSidebar} />;
};

export default SidebarOverlay;
