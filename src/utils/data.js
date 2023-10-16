const sampleData = {
    tableData: [
      {
        id: 1,
        name: "Product A",
        price: 50,
        sold: 20,
        inStock: 80,
        region: "India",
      },
      {
        id: 2,
        name: "Product B",
        price: 30,
        sold: 15,
        inStock: 50,
        region: "England",
      },
      {
        id: 3,
        name: "Product C",
        price: 70,
        sold: 25,
        inStock: 60,
        region: "China",
      },
      {
        id: 4,
        name: "Product D",
        price: 40,
        sold: 10,
        inStock: 70,
        region: "USA",
      },
      {
        id: 5,
        name: "Product E",
        price: 60,
        sold: 18,
        inStock: 82,
        region: "Australia",
      },
    ],
    salesData: [
      { month: "Jan", sales: 129 },
      { month: "Feb", sales: 200 },
      { month: "Mar", sales: 150 },
      { month: "Apr", sales: 250 },
      { month: "May", sales: 180 },
      { month: "Jun", sales: 250 },
      { month: "July", sales: 200 },
      { month: "Aug", sales: 250 },
      { month: "Sep", sales: 180 },
      { month: "Oct", sales: 250 },
      { month: "Nov", sales: 200 },
      { month: "Dec", sales: 126 },
    ],
    pieData: [
      { name: "New Customers", value: 30 },
      { name: "Old Customers", value: 70 },
    ],
    COLORS: ["#F23C9B", "#5832E9"],
    periods: [
      { title: "Half Yearly" },
      { title: "Quarterly" },
      { title: "Yearly" },
      { title: "Jan-Jun" },
      { title: "July-Dec" },
    ],
  };
  
  export default sampleData;
  