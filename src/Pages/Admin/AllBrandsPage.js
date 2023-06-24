import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../../Components/util/SideBar";
import BrandsTable from "../../Components/Admin/BrandsTable";

function AllBrandsPage() {
  return (
    <>
      <Row className="mx-0 p-0">
        <Col xm="3" sm="2" style={{ height: "100vh" }} className="p-0">
          <SideBar />
        </Col>
        <Col xs="9" sm="10">
          <BrandsTable />
        </Col>
      </Row>
    </>
  );
}

export default AllBrandsPage;
