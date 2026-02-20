const PartnerTable = ({ partners, onEdit, onDelete, onOpenModal }) => {
  const getStatusBadgeClass = (status) => {
    const statusMap = {
      active: "completed",
      inactive: "pending",
      suspended: "processing",
    };
    return statusMap[status] || "pending";
  };

  const getStatusLabel = (status) => {
    const labels = {
      active: "Active",
      inactive: "Inactive",
      suspended: "Suspended",
    };
    return labels[status] || status;
  };

  return (
    <div className="glass-card table-card">
      <div className="card-header">
        <div>
          <h2 className="card-title">Partner Management</h2>
          <p className="card-subtitle">Manage and monitor all partners</p>
        </div>
        <div className="card-actions">
          <button className="card-btn" onClick={() => onOpenModal()}>
            Add Partner
          </button>
          <button className="card-btn">Export</button>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Partner Name</th>
              <th className="hide-mobile">Contact</th>
              <th className="hide-tablet">Email</th>
              <th className="hide-mobile">Phone</th>
              <th>Status</th>
              <th className="hide-tablet">Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners && partners.length > 0 ? (
              partners.map((partner) => (
                <tr key={partner.id}>
                  <td>
                    <div className="table-user">
                      <div
                        className="table-avatar"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--emerald-light), var(--emerald))",
                        }}
                      >
                        {partner.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="table-user-info">
                        <span className="table-user-name">{partner.name}</span>
                        <span className="table-user-email">
                          {partner.company}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="hide-mobile">{partner.contact_person}</td>
                  <td className="hide-tablet">{partner.email}</td>
                  <td className="hide-mobile">{partner.phone}</td>
                  <td>
                    <span
                      className={`status-badge ${getStatusBadgeClass(
                        partner.status,
                      )}`}
                    >
                      {getStatusLabel(partner.status)}
                    </span>
                  </td>
                  <td className="hide-tablet">{partner.join_date || "N/A"}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => onEdit(partner)}
                        title="Edit"
                      >
                        ✎
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => onDelete(partner.id)}
                        title="Delete"
                      >
                        ✕
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  No partners found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerTable;
