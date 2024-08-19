import Header from "../../components/common/Header";
import Banner from "../../components/user/Homepage/Banner";
import Sponsors from "../../components/user/Homepage/Sponsors";
import Categories from "../../components/user/Homepage/Categories";
import Preorder from "../../components/user/Homepage/Preorder";
import ProductSection from "../../components/user/Homepage/ProductSection";
import UserReview from "../../components/user/Homepage/UserReview";
import Newsletter from "../../components/common/Newsletter";
import Footer from "../../components/common/Footer";
import SearchPopup from "../../components/common/SearchPopup";
import ShoppingCart from "../../components/common/ShoppingCart";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Sponsors />
      <Categories />
      <Preorder />
      <ProductSection />
      <UserReview />
      <Newsletter />
    </>
  );
};

export default Homepage;
