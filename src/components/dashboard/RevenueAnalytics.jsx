const RevenueAnalytics = () => {
  return (
    <div className="glass-card chart-card">
      <div className="card-header">
        <div>
          <h2 className="card-title">Revenue Analytics</h2>
          <p className="card-subtitle">Monthly revenue overview</p>
        </div>
        <div className="card-actions">
          <button className="card-btn active">Monthly</button>
          <button className="card-btn">Weekly</button>
          <button className="card-btn">Daily</button>
        </div>
      </div>
      <div className="chart-wrapper">
        <div className="chart-container">
          <div className="chart-y-axis">
            <span className="y-value">$100K</span>
            <span className="y-value">$80K</span>
            <span className="y-value">$60K</span>
            <span className="y-value">$40K</span>
            <span className="y-value">$20K</span>
            <span className="y-value">$0</span>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-emerald"
                style={{ height: "120px" }}
              ></div>
              <span className="chart-label">Jan</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-gold"
                style={{ height: "160px" }}
              ></div>
              <span className="chart-label">Feb</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-coral"
                style={{ height: "90px" }}
              ></div>
              <span className="chart-label">Mar</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-teal"
                style={{ height: "140px" }}
              ></div>
              <span className="chart-label">Apr</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-amber"
                style={{ height: "180px" }}
              ></div>
              <span className="chart-label">May</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-emerald"
                style={{ height: "130px" }}
              ></div>
              <span className="chart-label">Jun</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-gold"
                style={{ height: "170px" }}
              ></div>
              <span className="chart-label">Jul</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-coral"
                style={{ height: "150px" }}
              ></div>
              <span className="chart-label">Aug</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-teal"
                style={{ height: "190px" }}
              ></div>
              <span className="chart-label">Sep</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-amber"
                style={{ height: "140px" }}
              ></div>
              <span className="chart-label">Oct</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-emerald"
                style={{ height: "175px" }}
              ></div>
              <span className="chart-label">Nov</span>
            </div>
            <div className="chart-bar-group">
              <div
                className="chart-bar bar-gold"
                style={{ height: "200px" }}
              ></div>
              <span className="chart-label">Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalytics;
