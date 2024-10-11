import { faArrowDownShortWide, faArrowUpRightDots, faEquals, faMoneyBill, faTrophy, faTruckFast } from "@fortawesome/free-solid-svg-icons";

// Analysis Card
export const analysisCard = [
    {
        cardLogo: faMoneyBill,
        cardTitle: "Total Sales Revenue",
        totalRevenue: 300,
        cardCompare: faArrowUpRightDots,
        compareCustom: "increaseCompare",
        compareNumber: 32,
        compareClass: ""
    },
    {
        cardLogo: faTrophy,
        cardTitle: "Total Campaign",
        totalRevenue: 1329,
        cardCompare: faEquals,
        compareCustom: "faEqualsCustom",
        compareNumber: 0,
        compareClass: "equalCompare"
    },
    {
        cardLogo: faTruckFast,
        cardTitle: "Total Shipping Count",
        totalRevenue: 766,
        cardCompare: faArrowDownShortWide,
        compareCustom: "faArrowDownShortWideCustom",
        compareNumber: -20,
        compareClass: "decreaseCompare"
    }
]