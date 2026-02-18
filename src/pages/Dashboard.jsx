import ContentLayout from "../layouts/ContentLayout";
import StatsGrid from "../components/dashboard/StatsGrid";
import RevenueAnalytics from "../components/dashboard/RevenueAnalytics";
import RecentActivity from "../components/dashboard/RecentActivity";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {
  return (
    <ContentLayout>
      <StatsGrid />
      <section className="content-grid">
        <RevenueAnalytics />
        <RecentActivity />
        <RecentTransactions />
      </section>
    </ContentLayout>
  );
};

export default Dashboard;

// import ContentLayout from "../layouts/ContentLayout";
// import StatsGrid from "../components/dashboard/StatsGrid";
// import RevenueAnalytics from "../components/dashboard/RevenueAnalytics";
// import RecentActivity from "../components/dashboard/RecentActivity";
// import RecentTransactions from "../components/dashboard/RecentTransactions";
// import UserProfile from "../components/dashboard/UserProfile";

// const Dashboard = () => {
//   return (
//     <ContentLayout>
//       <StatsGrid />
//       <section className="content-grid">
//         <RevenueAnalytics />
//         <RecentActivity />

//         {/* ── Contoh penggunaan apiFetch ── */}
//         <UserProfile />

//         <RecentTransactions />
//       </section>
//     </ContentLayout>
//   );
// };

// export default Dashboard;
