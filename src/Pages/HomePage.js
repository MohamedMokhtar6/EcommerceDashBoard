import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../Components/util/SideBar";

function HomePage() {
  return (
    <>
      <Row className="mx-0 p-0">
        <Col xm="3" sm="2" style={{ height: "100vh" }} className="p-0">
          <SideBar />
        </Col>
        <Col xs="9" sm="10">
          ss
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
