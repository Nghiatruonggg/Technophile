import "bootstrap/dist/css/bootstrap.min.css";
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
import OrderManage from "./pages/admin/OrderManage";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import NewsPage from "./pages/user/NewsPage";
import NewsDetail from "./pages/user/NewsDetail";
import PostManage from "./pages/admin/PostManage";
import CreatePost from "./pages/admin/CreatePost";
import ToastifyContainer from "./components/popups/ToastifyContainer";
import "react-toastify/dist/ReactToastify.css";
import EditPost from "./pages/admin/EditPost";

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
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
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
            <Route path="/dashboard/orders" element={<OrderManage />} />
            <Route path="/dashboard/posts" element={<PostManage />} />
            <Route path="/dashboard/posts/add" element={<CreatePost />} />
            <Route path="/dashboard/posts/edit/:slug" element={<EditPost />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <ToastifyContainer />
    </GlobalStyles>
  );
};

export default App;
