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
      item: "WomenBaggy Jean",
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
  const products = bestproducts.map((item, i) => (
    <div
      key={i}
      className="flex items-center justify-between px-4 w-full py-2 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg cursor-pointer"
    >
      <div className="w-4/5 flex items-center">
        <img
          src={item.image}
          className="rounded-full w-12 h-12 object-cover transition-transform duration-200 ease-in-out transform hover:scale-105"
          alt={item.name}
        />
        <p className="text-sm ml-2 truncate">{item.name}</p>
      </div>
      <span className="w-1/5 text-right text-blue-600 font-medium">
        {item.price}
      </span>
    </div>
  ));

  return (
    <main className="flex-1 bg-[#C1CFE3] p-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {[
          { title: "Total Orders", value: "10,720", icon: order_icon },
          { title: "Total Sales", value: "₦1,800,309", icon: sales_icon },
          { title: "Active Vendors", value: "3,254", icon: vendors_icon },
          { title: "Total Users", value: "12,348", icon: users },
        ].map((stat, index) => (
          <div
            key={index}
            className="shadow-lg hover:shadow-xl sm:w-2/2 transition-shadow duration-200 border border-slate-300 bg-white rounded-xl flex flex-col items-start p-4"
          >
            <div className="ml-1 flex flex-col w-full">
              <p className="text-lg lg:text-xl">{stat.title}</p>
              <div className="flex w-full justify-between items-center mt-2">
                <h1 className="text-md lg:text-2xl w-[70%] whitespace-normal break-words font-bold text-gray-700 h-max">
                  {stat.value}
                </h1>
                <img
                  src={stat.icon}
                  alt={`${stat.title} icon`}
                  className="w-10 h-10 sm:w-8 sm:h-8"
                />
              </div>
              <p className="text-sm text-gray-500">From yesterday</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Best Sellers */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-4">
        {/* Sales Bar Chart */}
        <div className="flex-1 w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Sales Analytics
            </p>
            <div className="flex gap-2 text-sm">
              {["Daily", "Weekly", "Monthly", "Yearly"].map((period) => (
                <p
                  key={period}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                >
                  {period}
                </p>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} barSize={20}>
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="sales"
                fill="#227BF2"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Best Selling Products */}
        <div className="flex-1 w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 max-h-[350px] overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Best Selling Products
            </h3>
            <p className="text-sm cursor-pointer text-blue-500 hover:underline">
              See all
            </p>
          </div>
          <div>{products}</div>
        </div>
      </div>

      {/* Order Status Pie Chart and Recent Orders */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-8 gap-4">
        {/* Order Status Pie Chart */}
        <div className="flex-1 lg:w-1/3 sm:w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Order Status
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-4">
            {data02.map((status) => (
              <div key={status.name} className="text-center">
                <div
                  className={`w-4 h-4 mx-auto mb-1 rounded-full`}
                  style={{ backgroundColor: status.fill }}
                ></div>
                <p className="text-sm">{status.name}</p>
                <span className="text-base font-medium text-gray-700">
                  {status.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="flex-1 lg:w-2/3 w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-x-auto">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold text-gray-800">
              Recent Orders
            </span>
            <select className="bg-blue-100 p-2 rounded-lg text-sm">
              <option>Recent Orders</option>
              <option>Pending Orders</option>
              <option>Out of Stock</option>
              <option>Recently added products</option>
              <option>Delivered Items</option>
            </select>
          </div>
          <table className="min-w-full table-auto text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-200">Order ID</th>
                <th className="px-4 py-2 border-b border-gray-200">Item</th>
                <th className="px-4 py-2 border-b border-gray-200">Date</th>
                <th className="px-4 py-2 border-b border-gray-200">Price</th>
                <th className="px-4 py-2 border-b border-gray-200">Category</th>
                <th className="px-4 py-2 border-b border-gray-200">Seller</th>
                <th className="px-4 py-2 border-b border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.id}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.item}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.date}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.price}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.category}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.seller}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Content;
