import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

function CreateUser() {
  return (
    <>
      <Row className="m-3 flex-column ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New User</div>
        <input
          placeholder="User Name"
          type={"text"}
          className="fit reduce my-2 main-back-color"
        />
        <input
          placeholder="User Email"
          type="email"
          className="fit reduce my-2 main-back-color"
        />
        <input
          placeholder="User Password"
          type="password"
          className="fit reduce my-2 main-back-color"
        />
        <input
          placeholder="Phone Number"
          type="tel"
          className="fit reduce my-2 main-back-color"
        />
        <select className="my-2 reduce fit ">
          <option value={"0"}>Select Role</option>
          <option value={"1"}>Admin</option>
          <option value={"2"}>User</option>
        </select>
        <Button
          // style={{ backgroundColor: "000000" }}
          variant="dark"
          className="fit m-3 main-color"
        >
          Save
        </Button>

        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateUser;
