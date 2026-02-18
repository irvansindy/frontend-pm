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
