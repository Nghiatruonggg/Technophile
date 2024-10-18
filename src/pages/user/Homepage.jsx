import Banner from "../../components/user/Homepage/Banner";
import Sponsors from "../../components/user/Homepage/SponsorsSection/Sponsors";
import Categories from "../../components/user/Homepage/Categories/Categories";
import Preorder from "../../components/user/Homepage/Preorder/Preorder";
import ProductSection from "../../components/user/Homepage/ProductSection/ProductSection";
import UserReview from "../../components/user/Homepage/UserReview/UserReview";
import Newsletter from "../../components/common/Newsletter/Newsletter";
import ScrollToTop from "../../hooks/ScrollToTop";

const Homepage = () => {
  return (
    <>
      <ScrollToTop/>
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
