import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Button, Badge } from "react-bootstrap";
import {
  FiHome,
  FiClipboard,
  FiShoppingCart,
  FiFileText,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

import { AppPageHeader } from "components/general";

const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    redirectTo: "/",
  },
  {
    name: "Transactions",
    icon: <FiClipboard />,
    redirectTo: "/transactions",
  },
  {
    name: "Orders",
    icon: <FiShoppingCart />,
    redirectTo: "/orders",
  },
  {
    name: "Invoices",
    icon: <FiFileText />,
    redirectTo: "/invoices",
  },
  {
    name: "Products",
    icon: <FiBarChart2 />,
    redirectTo: "/products",
  },
  {
    name: "Customers",
    icon: <FiUsers />,
    redirectTo: "/customers",
  },
];

export const DashboardLayout = (props) => {
  const { title, children } = props;
  const router = useRouter();

  const handleRedirect = (url) => {
    router.push(url);
  };

  const renderSidebarLinks = () => {
    return sidebarLinks.map((_) => (
      <Container fluid className="button-container" key={_.name}>
        <Button onClick={() => handleRedirect(_.redirectTo)}>
          <span className="icon">{_.icon}</span> &nbsp; {_.name}
        </Button>
      </Container>
    ));
  };

  const DashboardSidebar = () => {
    return (
      <Container fluid className="dashboard-sidebar">
        <Container fluid className="dashboard-sidebar-header">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/inventory-logo.png"
              alt="inventory-logo"
              className="img-fluid"
            />
          </div>
        </Container>

        <Container fluid className="dashboard-links-container">
          {renderSidebarLinks()}
        </Container>

        <hr className="dashboard-sidebar-divider" />
      </Container>
    );
  };

  const DashboardPageContent = () => {
    return (
      <Container fluid className="dashboard-page-content">
        <AppPageHeader title={title} />

        {children}
      </Container>
    );
  };

  return (
    <>
      <Head>
        <title>Inventory | {title || "Dashboard"}</title>
      </Head>
      <Container fluid className="dashboard-layout">
        <DashboardSidebar />

        <DashboardPageContent />
      </Container>
    </>
  );
};
