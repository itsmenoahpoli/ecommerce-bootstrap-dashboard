import React from "react";
import { Row, Col, Card, Button, Table, Badge } from "react-bootstrap";
import CountUp from "react-countup";

import { DashboardLayout } from "components/layouts";

const coundUpDuration = 1;

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Row className="mb-4">
        <Col md={3}>
          <Card style={{ backgroundColor: "#DBECFD" }}>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="/images/pesos.png"
                    alt="pesos-logo"
                    className="img-fluid"
                    height={50}
                    width={50}
                  />
                </Col>
                <Col md={9}>
                  <b>SALES</b>

                  <h4>
                    <CountUp
                      end={(5, 750.0)}
                      decimals={2}
                      duration={coundUpDuration}
                    />
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ backgroundColor: "#E5E5FE" }}>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="/images/customers.png"
                    alt="pesos-logo"
                    className="img-fluid"
                    height={50}
                    width={50}
                  />
                </Col>
                <Col md={9}>
                  <b>CUSTOMERS</b>

                  <h4>
                    <CountUp end={142} duration={coundUpDuration} />
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ backgroundColor: "#D2FFDB" }}>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="/images/inventory.png"
                    alt="pesos-logo"
                    className="img-fluid"
                    height={50}
                    width={50}
                  />
                </Col>
                <Col md={9}>
                  <b>PRODUCTS</b>

                  <h4>
                    <CountUp end={13} duration={coundUpDuration} />
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ backgroundColor: "#F3F3F3" }}>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <img
                    src="/images/order.png"
                    alt="pesos-logo"
                    className="img-fluid"
                    height={50}
                    width={50}
                  />
                </Col>
                <Col md={9}>
                  <b>ORDERS</b>

                  <h4>
                    <CountUp end={92} duration={coundUpDuration} />
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col mc={7}>
          <Card className="dashboard-table-card">
            <Card.Header>
              <small>
                <b>Latest Orders</b>
              </small>

              <Button variant="link">View All</Button>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover>
                <thead>
                  <tr>
                    <td>Order #</td>
                    <td>Customer</td>
                    <td>Payment Type</td>
                    <td align="right">Status</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>ASD98A72</td>
                    <td>
                      <p className="td-text">Patrick Policarpio</p>
                      <p className="td-text">
                        <small className="text-muted">
                          patrickpolicarpio08@gmail.com
                        </small>
                      </p>
                    </td>
                    <td>Online (Gcash)</td>
                    <td align="right">
                      <Badge bg="warning">PENDING</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="dashboard-table-card">
            <Card.Header>
              <small>
                <b>Recent Transactions</b>
              </small>

              <Button variant="link">View All</Button>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover>
                <thead>
                  <tr>
                    <td>Transaction #</td>
                    <td>Date</td>
                    <td align="right">Status</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>ASD98A72</td>
                    <td>March 21,</td>
                    <td align="right">
                      <Badge bg="danger">CANCELLED</Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default DashboardPage;
