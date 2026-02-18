const RecentTransactions = () => {
  return (
    <div className="glass-card table-card">
      <div className="card-header">
        <div>
          <h2 className="card-title">Recent Transactions</h2>
          <p className="card-subtitle">Latest orders and payments</p>
        </div>
        <div className="card-actions">
          <button className="card-btn">View All</button>
          <button className="card-btn">Export</button>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="table-user">
                  <div
                    className="table-avatar"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--emerald-light), var(--emerald))",
                    }}
                  >
                    JD
                  </div>
                  <div className="table-user-info">
                    <span className="table-user-name">John Doe</span>
                    <span className="table-user-email">john@example.com</span>
                  </div>
                </div>
              </td>
              <td>Premium Plan</td>
              <td>Jan 15, 2025</td>
              <td>
                <span className="status-badge completed">Completed</span>
              </td>
              <td>
                <span className="table-amount">$299.00</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <div
                    className="table-avatar"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gold), var(--amber))",
                    }}
                  >
                    AS
                  </div>
                  <div className="table-user-info">
                    <span className="table-user-name">Anna Smith</span>
                    <span className="table-user-email">anna@example.com</span>
                  </div>
                </div>
              </td>
              <td>Enterprise License</td>
              <td>Jan 14, 2025</td>
              <td>
                <span className="status-badge processing">Processing</span>
              </td>
              <td>
                <span className="table-amount">$1,499.00</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <div
                    className="table-avatar"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--success), var(--emerald))",
                    }}
                  >
                    MJ
                  </div>
                  <div className="table-user-info">
                    <span className="table-user-name">Mike Johnson</span>
                    <span className="table-user-email">mike@example.com</span>
                  </div>
                </div>
              </td>
              <td>Team Bundle</td>
              <td>Jan 13, 2025</td>
              <td>
                <span className="status-badge completed">Completed</span>
              </td>
              <td>
                <span className="table-amount">$599.00</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <div
                    className="table-avatar"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--coral), var(--gold))",
                    }}
                  >
                    EW
                  </div>
                  <div className="table-user-info">
                    <span className="table-user-name">Emily White</span>
                    <span className="table-user-email">emily@example.com</span>
                  </div>
                </div>
              </td>
              <td>Starter Plan</td>
              <td>Jan 12, 2025</td>
              <td>
                <span className="status-badge pending">Pending</span>
              </td>
              <td>
                <span className="table-amount">$49.00</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className="table-user">
                  <div
                    className="table-avatar"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--emerald), var(--gold))",
                    }}
                  >
                    RB
                  </div>
                  <div className="table-user-info">
                    <span className="table-user-name">Robert Brown</span>
                    <span className="table-user-email">robert@example.com</span>
                  </div>
                </div>
              </td>
              <td>Pro Annual</td>
              <td>Jan 11, 2025</td>
              <td>
                <span className="status-badge completed">Completed</span>
              </td>
              <td>
                <span className="table-amount">$199.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
