import React from "react";
import { Container, Button, Form, FloatingLabel, Card } from "react-bootstrap";

import { DashboardLayout } from "components/layouts";

const ProductsPage = () => {
  return (
    <DashboardLayout title="Products">
      <Button variant="primary">New Product</Button>

      <Container fluid className="table-filters-container">
        <Form.Group className="form-group">
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
      </Container>
    </DashboardLayout>
  );
};

export default ProductsPage;
