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
import preorderImage from "../assets/common/images/Preorder image/Preorder Keyboard.png"

export const orderImage = preorderImage