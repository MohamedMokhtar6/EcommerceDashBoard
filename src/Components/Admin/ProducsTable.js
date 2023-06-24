import React from "react";
import { Table } from "react-bootstrap";

function ProducsTable() {
  return (
    <div className="DataTable">
      <Table striped bordered hover className="my-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>CreateDate</th>
            <th>UpdateDate</th>
            <th>Category Name</th>
            <th>Brand Id</th>
            <th>Poster</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Poco</td>
            <td>1000$</td>
            <td>4.5</td>
            <td>10</td>
            <td>2020</td>
            <td>2022</td>
            <td>Mobiles</td>
            <td>Xioami</td>
            <td>فى صوره هنا</td>
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

export default ProducsTable;
