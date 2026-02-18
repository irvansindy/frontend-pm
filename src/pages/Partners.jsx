import { useState, useEffect } from "react";
import ContentLayout from "../layouts/ContentLayout";
import PartnerTable from "../components/partners/PartnerTable";
import PartnerModal from "../components/partners/PartnerModal";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);

  // Sample data - replace with API calls later
  useEffect(() => {
    const samplePartners = [
      {
        id: 1,
        name: "John Doe",
        company: "Tech Solutions Inc",
        contact_person: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8900",
        address: "123 Tech Street",
        city: "San Francisco",
        country: "USA",
        status: "active",
        join_date: "2024-01-15",
      },
      {
        id: 2,
        name: "Anna Smith",
        company: "Global Ventures",
        contact_person: "Anna Smith",
        email: "anna@example.com",
        phone: "+1 234 567 8901",
        address: "456 Business Ave",
        city: "New York",
        country: "USA",
        status: "active",
        join_date: "2024-01-14",
      },
      {
        id: 3,
        name: "Mike Johnson",
        company: "Innovation Labs",
        contact_person: "Mike Johnson",
        email: "mike@example.com",
        phone: "+1 234 567 8902",
        address: "789 Innovation Way",
        city: "Austin",
        country: "USA",
        status: "inactive",
        join_date: "2024-01-13",
      },
      {
        id: 4,
        name: "Emily White",
        company: "Enterprise Solutions",
        contact_person: "Emily White",
        email: "emily@example.com",
        phone: "+1 234 567 8903",
        address: "321 Enterprise Blvd",
        city: "Boston",
        country: "USA",
        status: "active",
        join_date: "2024-01-12",
      },
      {
        id: 5,
        name: "Robert Brown",
        company: "Digital Dynamics",
        contact_person: "Robert Brown",
        email: "robert@example.com",
        phone: "+1 234 567 8904",
        address: "654 Digital Drive",
        city: "Seattle",
        country: "USA",
        status: "suspended",
        join_date: "2024-01-11",
      },
    ];
    setPartners(samplePartners);
  }, []);

  const handleOpenModal = (partner = null) => {
    setEditingPartner(partner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPartner(null);
  };

  const handleSubmit = (formData) => {
    if (editingPartner) {
      // Update existing partner
      setPartners((prev) =>
        prev.map((p) =>
          p.id === editingPartner.id ? { ...formData, id: p.id } : p,
        ),
      );
    } else {
      // Add new partner
      const newPartner = {
        ...formData,
        id: Math.max(...partners.map((p) => p.id), 0) + 1,
      };
      setPartners((prev) => [newPartner, ...prev]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this partner?")) {
      setPartners((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <ContentLayout>
      {/* <div className="page-header">
        <h1>Partners</h1>
      </div> */}
      <section className="content-section">
        <PartnerTable
          partners={partners}
          onEdit={handleOpenModal}
          onDelete={handleDelete}
          onOpenModal={handleOpenModal}
        />
      </section>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        partner={editingPartner}
      />
    </ContentLayout>
  );
};

export default Partners;
