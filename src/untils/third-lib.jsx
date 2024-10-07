// Owl Carousel config
export const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1100: {
      items: 3
    },
    1400: {
      items: 4,
    },
  },
};

export const options2 = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

// ApexChart config
// Apex Donut Chart
export const donutChartOptions = {
  chart: {
    type: "donut",
    width: "100%", // Ensure the chart takes up the full width of its container
  },

  legend: {
    position: "bottom",
  },

  labels: [
    "First Quarter - 2023",
    "Second Quarter - 2023",
    "Third Quarter - 2023",
  ],
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          width: "100%", // Adjust chart width for medium screens
        },
        legend: {
          position: "bottom",
          fontSize: "14px", // Adjust font size for better readability
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%", // Full width for smaller screens
        },
        legend: {
          position: "bottom",
          fontSize: "12px", // Smaller font for better fit
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%", // Full width for very small screens
        },
        legend: {
          position: "bottom",
          fontSize: "10px", // Even smaller font for the smallest screens
        },
      },
    },
  ],
};

export const data2023 = [236789, 344521, 490321];

// Apex Pie Chart
export const pieChartOptions = {
  chart: {
    type: "pie",
    width: "100%", // Ensure the chart takes up the full width of its container
  },

  legend: {
    position: "bottom",
  },

  labels: [
    "First Quarter - 2024",
    "Second Quarter - 2024",
    "Third Quarter - 2024",
  ],
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          width: "100%", // Adjust chart width for medium screens
        },
        legend: {
          position: "bottom",
          fontSize: "14px", // Adjust font size for better readability
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: "100%", // Full width for smaller screens
        },
        legend: {
          position: "bottom",
          fontSize: "12px", // Smaller font for better fit
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%", // Full width for very small screens
        },
        legend: {
          position: "bottom",
          fontSize: "10px", // Even smaller font for the smallest screens
        },
      },
    },
  ],
};

export const data2024 = [369821, 382119, 293219];

// Apex Zoomable Line chart
export const lineChartOptions = {
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 5,
    hover: {
      size: 7,
    },
  },
  stroke: {
    width: 10,
  },
  title: {
    text: "September sales",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.5,
      stops: [0, 50, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(0); // Adjust as needed
      },
    },
    title: {
      text: "Price",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
    x: {
      format: "dd MMM yyyy", // Format date as needed
    },
    y: {
      formatter: function (val) {
        return `$${val.toFixed(2)}`; // Customize the value formatting
      },
      title: {
        formatter: (seriesName) => seriesName, // This ensures the correct series name is shown
      },
    },
  },
};

export const series = [
  {
    name: "September Sales",
    data: [
      { x: new Date("2024-09-12").getTime(), y: 760 },
      { x: new Date("2024-09-13").getTime(), y: 1500 },
      { x: new Date("2024-09-14").getTime(), y: 2000 },
      { x: new Date("2024-09-15").getTime(), y: 3000 },
      { x: new Date("2024-09-16").getTime(), y: 2500 },
      { x: new Date("2024-09-17").getTime(), y: 3500 },
      { x: new Date("2024-09-18").getTime(), y: 5000 },
      { x: new Date("2024-09-19").getTime(), y: 3200 },
      { x: new Date("2024-09-20").getTime(), y: 1500 },
      { x: new Date("2024-09-21").getTime(), y: 2000 },
      { x: new Date("2024-09-22").getTime(), y: 3000 },
      { x: new Date("2024-09-23").getTime(), y: 2500 },
      { x: new Date("2024-09-24").getTime(), y: 3500 },
      { x: new Date("2024-09-25").getTime(), y: 4200 },
      { x: new Date("2024-09-26").getTime(), y: 800 },
      { x: new Date("2024-09-27").getTime(), y: 1500 },
      { x: new Date("2024-09-28").getTime(), y: 2000 },
      { x: new Date("2024-09-29").getTime(), y: 3000 },
      { x: new Date("2024-09-30").getTime(), y: 2500 },
    ],
  },
];
