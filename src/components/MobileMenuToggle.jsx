import { useSidebar } from "../contexts/SidebarContext";

const MobileMenuToggle = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button className="mobile-menu-toggle" onClick={toggleSidebar}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
};

export default MobileMenuToggle;