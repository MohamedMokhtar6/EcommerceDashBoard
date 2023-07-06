import React from "react";
import { Table } from "react-bootstrap";

function UserTable() {
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Username</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mohamed</td>
            <td>Mokhtar</td>
            <td>MohamedMokhtar</td>
            <td>mohamed01017715716@gmail.com</td>
            <td className="text-center">
              <i className="fa-solid fa-trash text-danger click"></i>
            </td>
            <td className="text-center">
              <i className="fa-solid fa-pen-to-square click"></i>
            </td>
          </tr>
          <tr>
            <td>Mohamed</td>
            <td>Mokhtar</td>
            <td>MohamedMokhtar</td>
            <td>mohamed01017715716@gmail.com</td>
            <td className="text-center">
              <i className="fa-solid fa-trash"></i>
            </td>
            <td className="text-center">
              <i className="fa-solid fa-pen-to-square"></i>
            </td>
          </tr>
          <tr>
            <td>Mohamed</td>
            <td>Mokhtar</td>
            <td>MohamedMokhtar</td>
            <td>mohamed01017715716@gmail.com</td>
            <td className="text-center">
              <i className="fa-solid fa-trash"></i>
            </td>
            <td className="text-center">
              <i className="fa-solid fa-pen-to-square"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
