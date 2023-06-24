import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/auth/LoginPage";
import HomePage from "./Pages/HomePage";
import AllUsersPage from "./Pages/Admin/AllUsersPage";
import AllProductsPage from "./Pages/Admin/AllProductsPage";
import AllCategoriesPage from "./Pages/Admin/AllCategoriesPage";
import AllBrandsPage from "./Pages/Admin/AllBrandsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/allUsers" element={<AllUsersPage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/allCategories" element={<AllCategoriesPage />} />
          <Route path="/allBrands" element={<AllBrandsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
