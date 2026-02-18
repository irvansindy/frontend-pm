const RecentActivity = () => {
  return (
    <div className="glass-card activity-card">
      <div className="card-header">
        <div>
          <h2 className="card-title">Recent Activity</h2>
          <p className="card-subtitle">Latest transactions</p>
        </div>
      </div>
      <div className="activity-list">
        <div className="activity-item">
          <div
            className="activity-avatar"
            style={{
              background:
                "linear-gradient(135deg, var(--emerald-light), var(--emerald))",
            }}
          >
            JD
          </div>
          <div className="activity-content">
            <p className="activity-text">
              <strong>John Doe</strong> purchased Premium Plan
            </p>
            <span className="activity-time">2 minutes ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div
            className="activity-avatar"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--amber))",
            }}
          >
            AS
          </div>
          <div className="activity-content">
            <p className="activity-text">
              <strong>Anna Smith</strong> submitted a support ticket
            </p>
            <span className="activity-time">15 minutes ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div
            className="activity-avatar"
            style={{
              background: "linear-gradient(135deg, var(--coral), var(--gold))",
            }}
          >
            MJ
          </div>
          <div className="activity-content">
            <p className="activity-text">
              <strong>Mike Johnson</strong> upgraded subscription
            </p>
            <span className="activity-time">1 hour ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div
            className="activity-avatar"
            style={{
              background:
                "linear-gradient(135deg, var(--success), var(--emerald))",
            }}
          >
            EW
          </div>
          <div className="activity-content">
            <p className="activity-text">
              <strong>Emily White</strong> completed onboarding
            </p>
            <span className="activity-time">2 hours ago</span>
          </div>
        </div>
        <div className="activity-item">
          <div
            className="activity-avatar"
            style={{
              background:
                "linear-gradient(135deg, var(--warning), var(--gold))",
            }}
          >
            RB
          </div>
          <div className="activity-content">
            <p className="activity-text">
              <strong>Robert Brown</strong> requested refund
            </p>
            <span className="activity-time">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
