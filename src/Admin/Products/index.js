import { useState } from "react";
import { Link } from "react-router-dom";
import chart from "../../assets/img/AdminImages/chart.svg";
import sharp from "../../assets/img/AdminImages/sharp.svg";
const products = [
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
  {
    name: "Mangos",
    price: "120",
    category: "Vegetables",
    available: "30kg",
    createdAt: "2022-01-01",
  },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Left */}
      <div className="mt-6 flex flex-col w-[15%]">
        <p className="pl-8 text-lg font-semibold">Rurket ADMIN</p>
        {/* Line */}
        <div className=" bg-rurketAdminGrayLine h-[1px] w-full mt-6 " />
        <div className="pl-8 flex flex-col gap-5 mt-6">
          {/* Products */}
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center w-8 h-8 bg-white rounded-xl ">
              <img src={chart} alt="chart" className=" w-4 h-4 object-cover" />
            </div>
            <button className="font-semibold text-gray-400">Products</button>
          </div>
          {/* Orders */}
          <div className="flex gap-3 items-center">
            <div className="flex items-center justify-center w-9 h-9 bg-white rounded-xl ">
              <img
                src={sharp}
                alt="sharp"
                className=" w-5 h-5 object-contain"
              />
            </div>
            <Link to="/admin/allOrders" className="font-semibold text-gray-400">
              Orders
            </Link>
          </div>
        </div>
      </div>

      {/* Middle-Products */}
      <div className=" flex-1 h-screen overflow-y-scroll">
        <p className="ml-6 mt-7 font-semibold">Products</p>
        {/* Products Container */}
        <div className="w-[90%] mx-auto rounded-3xl bg-white h-auto p-6 mt-14 drop-shadow-sm ">
          <div className="flex justify-between mt-2">
            <p className="font-semibold text-lg">Products</p>
            <button
              onClick={() => setShowModal(true)}
              className="w-[186px] h-[35px] bg-rurketAdminGreen flex items-center justify-center text-xs text-white rounded-xl 
            font-lato mr-6"
            >
              ADD PRODUCT
            </button>
          </div>
          {/* Products Table container */}
          <div className="relative flex flex-col pt-4">
            <table className="table-auto h-full">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left pb-3">
                    <p className="pb-3">Name</p>
                    <hr />
                  </th>
                  <th className="text-right  pb-3">
                    <p className="pb-3">Price</p>
                    <hr />
                  </th>
                  <th className="text-center  pb-3">
                    <p className="pb-3">Category</p>
                    <hr />
                  </th>
                  <th className="text-left  pb-3">
                    <p className="pb-3">Available</p>
                    <hr />
                  </th>
                  <th className="text-left  pb-3">
                    <p className="pb-3">Created At</p>
                    <hr />
                  </th>
                  <th className="text-right  pb-3">
                    <p className="mt-5 pb-3"></p>
                    <hr />
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <tr className="font-semibold" key={product.name}>
                    <td className="relative text-left py-4 font-lato  text-gray-700">
                      {product.name}
                      <hr className="w-full absolute top-14" />
                    </td>
                    <td className="relative text-right  py-4 font-lato text-gray-700">
                      {product.price}
                      <hr className="w-full absolute top-14" />
                    </td>
                    <td className="relative text-center py-4 font-lato text-gray-700">
                      {product.category}
                      <hr className="w-full absolute top-14" />
                    </td>
                    <td className="relative text-left py-4 font-lato text-gray-700">
                      {product.available}
                      <hr className="w-full absolute top-14" />
                    </td>
                    <td className="relative text-left py-4 font-lato text-gray-700">
                      {product.createdAt}
                      <hr className="w-full absolute top-14" />
                    </td>
                    <td className="relative text-left py-4 font-lato text-gray-500 cursor-pointer">
                      Edit
                      <hr className="w-full absolute top-14" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
