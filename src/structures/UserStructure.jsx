import Banner1 from "../assets/common/images/Banner_LandingPage/Banner Des 1.png";
import Banner2 from "../assets/common/images/Banner_LandingPage/Banner Des 2.png";
import Banner3 from "../assets/common/images/Banner_LandingPage/Banner Des 3.png";

// Banners
export const bannerGroup = [Banner1, Banner2, Banner3];

// Sponsors Section
import AppleLogo from "../assets/common/images/Sponsor Logo/Apple-Logo-2048x1152.png";
import AsusLogo from "../assets/common/images/Sponsor Logo/AsusTek-black-logo.png";
import LGLogo from "../assets/common/images/Sponsor Logo/LG Logo.png";
import SamsungLogo from "../assets/common/images/Sponsor Logo/Samsung Logo.png";

export const sponsorGroup = [AppleLogo, AsusLogo, LGLogo, SamsungLogo];

// Category Logo
import mobileLogo from "../assets/common/images/Category Section/Mobile Logo.webp";
import desktopLogo from "../assets/common/images/Category Section/Computers Logo.webp";
import laptopLogo from "../assets/common/images/Category Section/Test Laptop Logo.png";
import accesoriesLogo from "../assets/common/images/Category Section/Accesories Logo.webp";
import monitorLogo from "../assets/common/images/Category Section/Monitor .webp";
import networkingLogo from "../assets/common/images/Category Section/Networking.webp";

export const categoryLogo = [
  {
    id: 1,
    imageSrc: mobileLogo,
    name: "Mobile",
    redirectPath: "/mobile-categories",
  },
  {
    id: 2,
    imageSrc: desktopLogo,
    name: "Desktop",
    redirectPath: "/desktop-categories",
  },
  {
    id: 3,
    imageSrc: laptopLogo,
    name: "Laptop",
    redirectPath: "/laptop-categories",
  },
  {
    id: 4,
    imageSrc: accesoriesLogo,
    name: "Accesories",
    redirectPath: "/accesories-categories",
  },
  {
    id: 5,
    imageSrc: monitorLogo,
    name: "Monitor",
    redirectPath: "/monitor-categories",
  },
  {
    id: 6,
    imageSrc: networkingLogo,
    name: "Networking",
    redirectPath: "/networking-categories",
  },
];

// Preorder
import preorderImage from "../assets/common/images/Preorder image/Preorder Keyboard.png";

export const orderImage = preorderImage;

// Achievement Section
import AUGraphic1 from "../assets/common/images/Achievement Section/graphic-1.webp";
import AUGraphic2 from "../assets/common/images/Achievement Section/graphic-2.webp";
import AUGraphic3 from "../assets/common/images/Achievement Section/graphic-3.webp";

export const AUGraphics = [
  {
    graphic: AUGraphic1,
    mainTitle: "40,000+ Happy Customer",
    content:
      "Our expert team is always ready to assist, ensuring a seamless and satisfying shopping experience.",
    alt: "Happy Customer",
  },
  {
    graphic: AUGraphic2,
    mainTitle: "100,000+ Products Sold",
    content:
      "We've proudly sold over 100,000+ products to tech enthusiasts worldwide over the last year and we want to sell more!.",
    alt: "Product Selling",
  },
  {
    graphic: AUGraphic3,
    mainTitle: "+5 years of selling",
    content:
      "During this time, we've curated an extensive selection of the latest gadgets, cutting-edge electronics, and top-tier accessories.",
    alt: "High Experience",
  },
];

// Brand Filtering
import appleLogo from "../assets/common/images/Sponsor Logo/Apple-Logo-2048x1152.png"
import samsungLogo from "../assets/common/images/Sponsor Logo/Samsung Logo.png";
import nokiaLogo from "../assets/common/images/Mobile-Categories/Nokia 2023 New Logo.png";
import viettelLogo from "../assets/common/images/Mobile-Categories/Viettel_logo_2021.svg.png";
import xiaomiLogo from "../assets/common/images/Mobile-Categories/Xiaomi_logo_(2021-).svg.png";
import oneplusLogo from "../assets/common/images/Mobile-Categories/oneplus logo.png";
import oppoLogo from "../assets/common/images/Mobile-Categories/oppo logo.png";
import huaweiLogo from "../assets/common/images/Mobile-Categories/huawei logo.png";

export const brandFiltering = [
  {
    brand: appleLogo,
    alt: "appleLogo",
    newClassName: ""
  },
  {
    brand: samsungLogo,
    alt: "samsungLogo",
    newClassName: ""
  },
  {
    brand: nokiaLogo,
    alt: "nokiaLogo",
    newClassName: ""
  },
  {
    brand: viettelLogo,
    alt: "viettelLogo",
    newClassName: ""
  },
  {
    brand: xiaomiLogo,
    alt: "xiaomiLogo",
    newClassName: "xiaomiLogo"
  },
  {
    brand: huaweiLogo,
    alt: "huaweiLogo",
    newClassName: "huaweiLogo"
  },
  {
    brand: oneplusLogo,
    alt: "oneplusLogo",
    newClassName: "oneplusLogo"
  },
  {
    brand: oppoLogo,
    alt: "oppoLogo",
    newClassName: ""
  },
]

// Service Graphic
import Service1 from "../assets/common/images/Service Graphic/service1.webp"
import Service2 from "../assets/common/images/Service Graphic/service2.webp"
import Service3 from "../assets/common/images/Service Graphic/service3.webp"
import Service4 from "../assets/common/images/Service Graphic/service4.webp"

export const serviceGraphic = [
  {
    graphic: Service1,
    title: "Fast And Secure Delivery",
    subText: "Always be on time",
    addedClassname: "wrapService"
  },
  {
    graphic: Service2,
    title: "Money Back Guarantee",
    subText: "Within 14 days",
    addedClassname: "wrapService"
  },
  {
    graphic: Service3,
    title: "48 Hours Return Policy",
    subText: "Assist the best we can",
    addedClassname: "wrapService fix1"
  },
  {
    graphic: Service4,
    title: "Pro Quality Support",
    subText: "24/7 Live Support",
    addedClassname: "wrapService fix2"
  },
]
