import React from "react";
import { Container } from "react-bootstrap";

import { AppBreadcrumb } from "components/general";
import moment from "moment";

export const AppPageHeader = (props) => {
  const { title } = props;

  const getCurrentDatetime = () => {
    return moment().format("MMMM Do YYYY, h:mm A");
  };

  return (
    <Container fluid className="dashboard-page-header">
      <div>
        <h3 className="page-title">{title || "Dashboard"}</h3>

        <AppBreadcrumb />
      </div>

      <div>
        <small className="text-muted">{getCurrentDatetime()}</small>
      </div>
    </Container>
  );
};
