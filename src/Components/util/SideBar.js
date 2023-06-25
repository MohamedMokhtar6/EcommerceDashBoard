import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sideBar">
      <div className="text-center">
        <span className="fit">Welcome Mohamed Mokhtar</span>
      </div>
      <div className="sideItem ">
        <i className="fa-solid fa-users fs-4"></i>
        <Link to={"/allUsers"}>All Users</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-shop fs-4"></i>
        <Link to={"/allProducts"}>All Products</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-list fs-4"></i>
        <Link to={"/allCategories"}>All Categories</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-table-list fs-4"></i>
        <Link to={"/allBrands"}>All Brands</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-plane-departure fs-4"></i>
        <Link to={"/allOrders"}>All orders</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-user-plus fs-4"></i>
        <Link to={"/createUser"}>Create User</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-square-plus fs-4"></i>
        <Link to={"/"}>Create Product</Link>
      </div>
      <div className="sideItem">
        <i className="fa-regular fa-square-plus fs-4"></i>
        <Link to={"/"}>Create Category</Link>
      </div>
      <div className="sideItem">
        <i className="fa-solid fa-plus fs-4"></i>
        <Link to={"/"}>Create Brand</Link>
      </div>
      <div className="text-center">
        <button
          className="p-1 mt-4 fit  "
          onClick={() => {
            navigate("/login");
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default SideBar;
