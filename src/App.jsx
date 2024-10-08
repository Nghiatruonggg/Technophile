import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/user/Homepage";
import { Route, Routes } from "react-router-dom";
import LayoutApp from "./pages/user/LayoutApp";
import MobileCategories from "./pages/user/MobileCategories";
import ProductDetails from "./pages/user/ProductDetails";
import AboutUs from "./pages/user/AboutUs";
import ContactUs from "./pages/user/ContactUs";
import DesktopCategories from "./pages/user/DesktopCategories";
import CartView from "./pages/user/CartView";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/admin/Dashboard";
import LayoutAdmin from "./pages/admin/LayoutAdmin";
import DashboardProducts from "./pages/admin/DashboardProducts";
import IsAuth from "./components/auth/IsAuth";
import CreateProduct from "./pages/admin/CreateProduct";
import EditProduct from "./pages/admin/EditProduct";
import GlobalStyles from "./components/global-styles/GlobalStyles";

const App = () => {
  return (
    <GlobalStyles>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Homepage />} />
          <Route path="/mobile-categories" element={<MobileCategories />} />
          <Route path="/mobile-categories/:id" element={<ProductDetails />} />
          <Route path="/desktop-categories" element={<DesktopCategories />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart-view" element={<CartView />} />

          {/* Admin Dashboard */}
          <Route
            path="/dashboard"
            element={<IsAuth component={<LayoutAdmin />} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/products" element={<DashboardProducts />} />
            <Route path="/dashboard/products/add" element={<CreateProduct />} />
            <Route
              path="/dashboard/products/edit/:id"
              element={<EditProduct />}
            />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </GlobalStyles>
  );
};

export default App;
