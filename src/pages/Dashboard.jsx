import DashboardLayout from "../layouts/DashboardLayout";
import StatsGrid from "../components/dashboard/StatsGrid";
import RevenueAnalytics from "../components/dashboard/RevenueAnalytics";
import RecentActivity from "../components/dashboard/RecentActivity";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <StatsGrid />
      <section className="content-grid">
        <RevenueAnalytics />
        <RecentActivity />
        <RecentTransactions />
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;

// import DashboardLayout from "../layouts/DashboardLayout";
// import StatsGrid from "../components/dashboard/StatsGrid";
// import RevenueAnalytics from "../components/dashboard/RevenueAnalytics";
// import RecentActivity from "../components/dashboard/RecentActivity";
// import RecentTransactions from "../components/dashboard/RecentTransactions";
// import UserProfile from "../components/dashboard/UserProfile";

// const Dashboard = () => {
//   return (
//     <DashboardLayout>
//       <StatsGrid />
//       <section className="content-grid">
//         <RevenueAnalytics />
//         <RecentActivity />

//         {/* ── Contoh penggunaan apiFetch ── */}
//         <UserProfile />

//         <RecentTransactions />
//       </section>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;