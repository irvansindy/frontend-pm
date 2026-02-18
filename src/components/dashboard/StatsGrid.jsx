const StatsGrid = () => {
  return (
    <section className="stats-grid">
      <div className="glass-card glass-card-3d stat-card">
        <div className="stat-card-inner">
          <div className="stat-info">
            <h3>Total Revenue</h3>
            <div className="stat-value">$84,254</div>
            <span className="stat-change positive">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
              +12.5%
            </span>
          </div>
          <div className="stat-icon cyan">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--emerald-light)"
              strokeWidth="2"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="glass-card glass-card-3d stat-card">
        <div className="stat-card-inner">
          <div className="stat-info">
            <h3>Active Users</h3>
            <div className="stat-value">24,521</div>
            <span className="stat-change positive">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
              +8.2%
            </span>
          </div>
          <div className="stat-icon magenta">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      </div>

      <div className="glass-card glass-card-3d stat-card">
        <div className="stat-card-inner">
          <div className="stat-info">
            <h3>Total Orders</h3>
            <div className="stat-value">8,461</div>
            <span className="stat-change negative">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
              </svg>
              -3.1%
            </span>
          </div>
          <div className="stat-icon purple">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--coral)"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="glass-card glass-card-3d stat-card">
        <div className="stat-card-inner">
          <div className="stat-info">
            <h3>Conversion Rate</h3>
            <div className="stat-value">3.24%</div>
            <span className="stat-change positive">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              </svg>
              +2.4%
            </span>
          </div>
          <div className="stat-icon success">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--success)"
              strokeWidth="2"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
