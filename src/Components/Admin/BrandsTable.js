import React from "react";
import { Table } from "react-bootstrap";

function BrandsTable() {
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand Name</th>
            <th>Category Name</th>
            <th>CreateDate</th>
            <th>UpdateDate</th>
            <th>Brand Poster</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Samsung</td>
            <td>Mobiles</td>
            <td>2022</td>
            <td>2023</td>
            <td>صوره</td>
            <td className="text-center">
              <i className="fa-solid fa-trash text-danger"></i>
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

export default BrandsTable;
