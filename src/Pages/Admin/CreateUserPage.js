import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../../Components/util/SideBar";
import CreateUser from "../../Components/Admin/CreateUser";

function CreateUserPage() {
  return (
    <>
      <Row className="mx-0 p-0">
        <Col xm="3" sm="2" style={{ height: "100vh" }} className="p-0">
          <SideBar />
        </Col>
        <Col
          xs="9"
          sm="10"
          className="content d-flex align-items-center justify-content-center"
        >
          <CreateUser />
        </Col>
      </Row>
    </>
  );
}

export default CreateUserPage;
