import order_icon from "../../assets/Filtered-Images/tder.png";
import vendors_icon from "../../assets/Filtered-Images/vendors.png";
import users from "../../assets/Filtered-Images/users.png";
import sales_icon from "../../assets/Filtered-Images/sales.png";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import VendorLayout from "../../../layout/VendorDashboardLayout";

const Content = () => {
  const orders = [
    {
      id: "MP1010",
      item: "Women Classy Top",
      date: "13/09/24",
      price: "#20,000",
      category: "Women",
      seller: "SB Empire",
      status: "Delivered",
    },
    {
      id: "MP1012",
      item: "Men Classy Set",
      date: "12/09/24",
      price: "#150,000",
      category: "Men",
      seller: "Market Prime",
      status: "Delivered",
    },
    {
      id: "MP1014",
      item: "Custom-made Ring Set",
      date: "12/09/24",
      price: "#200,000",
      category: "Unisex",
      seller: "FashionLot",
      status: "Pending",
    },
    {
      id: "MP1016",
      item: "Women Baggy Jean",
      date: "11/09/24",
      price: "#20,000",
      category: "Women",
      seller: "Ola Boutique",
      status: "Delivered",
    },
  ];

  const data02 = [
    { name: "Pending", value: 12, fill: "#F7EC1B" },
    { name: "Success", value: 79, fill: "#3D56FA" },
    { name: "Cancelled", value: 9, fill: "#F82A0D" },
  ];

  const data = [
    { name: "Jan", uv: 100, sales: 100, amt: 100 },
    { name: "Feb", uv: 200, sales: 300, amt: 200 },
    { name: "Mar", uv: 300, sales: 500, amt: 300 },
    { name: "Apr", uv: 400, sales: 700, amt: 400 },
    { name: "May", uv: 500, sales: 900, amt: 500 },
    { name: "Jun", uv: 600, sales: 1100, amt: 600 },
    { name: "Jul", uv: 700, sales: 1300, amt: 700 },
    { name: "Aug", uv: 800, sales: 1500, amt: 800 },
    { name: "Sep", uv: 900, sales: 1700, amt: 900 },
    { name: "Oct", uv: 1000, sales: 1900, amt: 1000 },
    { name: "Nov", uv: 1100, sales: 2100, amt: 1100 },
    { name: "Dec", uv: 1200, sales: 2300, amt: 1200 },
  ];

  const bestproducts = [
    {
      image: "/images/Rectangle 4024.png",
      name: "Women Classy Fashion Bag",
      price: "#50,000",
    },
    {
      image: "/images/Rectangle 4038.png",
      name: "Women Classy Top",
      price: "#20,000",
    },
    {
      image: "/images/Rectangle 4035.png",
      name: "Men Classy Leather Watch",
      price: "#150,000",
    },
    {
      image: "/images/Rectangle 4033.png",
      name: "Men Classy Set",
      price: "#100,000",
    },
    {
      image: "/images/Rectangle 4025.png",
      name: "Women Bodycon Dress",
      price: "#30,000",
    },
  ];

  const products = bestproducts.map((item, i) => {
    return (
      <div
        key={i}
        className="flex items-center justify-between px-5 w-full mt-2 bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition"
      >
        <div className="flex items-center">
          <img
            src={item.image}
            className="rounded-full w-12 h-12"
            alt={item.name}
          />
          <p className="text-sm ml-2">{item.name}</p>
        </div>
        <span className="font-semibold text-gray-800">{item.price}</span>
      </div>
    );
  });

  return (
    <VendorLayout>
      <main className="flex-1 bg-[#C1CFE3] px-4 lg:px-6 md:px-3 overflow-y-auto">
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            { title: "Total Orders", count: "10720", icon: order_icon },
            { title: "Total Sales", count: "N1,800,309", icon: sales_icon },
            { title: "Active Vendors", count: "10720", icon: vendors_icon },
            { title: "Total Users", count: "10720", icon: users },
          ].map((stat, i) => (
            <div
              key={i}
              className="shadow-md bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition"
            >
              <div>
                <p className="text-lg font-medium text-gray-700">
                  {stat.title}
                </p>
                <h1 className="text-2xl font-bold mt-2">{stat.count}</h1>
              </div>
              <img src={stat.icon} alt={stat.title} className="w-12 h-12" />
            </div>
          ))}
        </div>

        {/* Analytics and Best Products */}
        <div className="flex flex-col lg:flex-row gap-4 mt-8">
          {/* Bar Chart */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="sales" fill="#3D56FA" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Best Selling Products */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">
              Best Selling Products
            </h3>
            <div className="overflow-y-auto max-h-96">{products}</div>
          </div>
        </div>

        {/* Order Pie Chart and Recent Orders */}
        <div className="flex flex-col lg:flex-row gap-4 mt-8">
          {/* Pie Chart */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-4">Order Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data02}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={100}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-between mt-4">
              {[
                { label: "Success", color: "#3D56FA", value: "79%" },
                { label: "Pending", color: "#F7EC1B", value: "12%" },
                { label: "Cancelled", color: "#F82A0D", value: "9%" },
              ].map((status, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`h-4 w-4 rounded-full`}
                    style={{ backgroundColor: status.color }}
                  />
                  <p className="text-sm">{status.label}</p>
                  <p className="font-semibold">{status.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="w-full lg:w-[70%]  bg-white rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 text-xl">Recent Orders</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Sort By:</span>
                <select className="bg-blue-100 py-1 px-2 rounded-lg">
                  <option>Recent Orders</option>
                  <option>Pending Orders</option>
                  <option>Out of Stock</option>
                  <option>Recently added products</option>
                  <option>Delivered Items</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-1 text-left">Order ID</th>
                    <th className="px-4 py-1 text-left">Item</th>
                    <th className="px-4 py-1 text-left">Date</th>
                    <th className="px-4 py-1 text-left">Price</th>
                    <th className="px-4 py-1 text-left">Category</th>
                    <th className="px-4 py-1 text-left">Seller</th>
                    <th className="px-4 py-1 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-4 py-[8px]">{order.id}</td>
                      <td className="px-4 py-[8px]">{order.item}</td>
                      <td className="px-4 py-[8px]">{order.date}</td>
                      <td className="px-4 py-[8px]">{order.price}</td>
                      <td className="px-4 py-[8px]">{order.category}</td>
                      <td className="px-4 py-[8px]">{order.seller}</td>
                      <td
                        className={`px-4 py-1 ${
                          order.status === "Pending"
                            ? "text-yellow-500"
                            : "text-blue-800"
                        }`}
                      >
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Content;
