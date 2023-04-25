import React from "react";
import "./index.css";
import chart from "../../assets/img/AdminImages/chart.svg";
import sharp from "../../assets/img/AdminImages/sharp.svg";

const AllOrders = () => {
  return (
    <div className="container-full">
      {/* Left */}
      <div className="left-side">
        <p className="heading-p">Rurket ADMIN</p>
        {/* Line */}
        <div className="straight-line"></div>
        <div className="product-orders">
          {/* Products */}
          <div className="product-container">
            <div className="pro-cont">
              <img src={chart} alt="chart" className="chart-img" />
            </div>
            <p className="pro-text">Products</p>
          </div>
          {/* Orders */}
          <div className="order-container">
            <div className="ord-cont">
              <img src={sharp} alt="sharp" className="sharp-img" />
            </div>
            <p className="ord-text">Orders</p>
          </div>
        </div>
      </div>
      {/* Middle-Products */}
      <div className="middle-side"></div>
      {/* Right */}
      <div className="right-side">
        <div className="heading-head">
          <p className="heading-h">Orders</p>
        </div>
        <div className="big-box">
          <div className="h-head">
            <p className="h-h">Orders</p>
          </div>
          {/* Table */}
          <div className="box-table">
            <table className="whole-table">
              {/* Column-Name */}
              <tr className="main-col">
                <th className="th-1">
                  Order<div className="table-line"></div>
                </th>
                <th className="th-2">
                  Area<div className="table-line"></div>
                </th>
                <th className="th-3">
                  Total<div className="table-line"></div>
                </th>
                <th className="th-4">
                  Status<div className="table-line"></div>
                </th>
                <th className="th-5">
                  Created At<div className="table-line"></div>
                </th>
                <th className="th-6">
                  Actions<div className="table-line"></div>
                </th>
                <th className="th-7">
                  Cancel<div className="table-line"></div>
                </th>
                <th className="th-8">
                  View<div className="table-line"></div>
                </th>
              </tr>
              {/* Row-1 */}
              <tr className="name-one">
                <td className="td-1">
                  <div className="item-name-id">
                    <p className="i-name">Mangos, Pine Apple ...</p>
                  </div>
                  <div className="item-id">
                    <p className="i-id">ID:123456</p>
                  </div>
                </td>
                <td className="td-2">
                  <div className="area-na">
                    <p className="a-name">Subash Nagar</p>
                  </div>
                </td>
                <td className="td-3">
                  <div className="tot-amt">
                    <p className="t-amt">450</p>
                  </div>
                </td>
                <td className="td-4">
                  <button className="od-btn-or">Ordered</button>
                </td>
                <td className="td-5">22/07/2022</td>
                <td className="td-6">
                  {" "}
                  <button className="od-btn-c">Confirm</button>
                </td>
                <td className="td-7">
                  <button className="canl-btn">Cancel</button>
                </td>
                <td className="td-8">
                  <button>View</button>
                </td>
              </tr>
              {/* Row-2 */}
              <tr className="name-two">
                <td className="td-1">
                  <div className="item-name">
                    <p className="i-name">Mangos, Pine Apple ...</p>
                  </div>
                  <div className="item-id">
                    <p className="i-id">ID:123456</p>
                  </div>
                </td>
                <td className="td-2">
                  <div className="area-na">
                    <p className="a-name">Subash Nagar</p>
                  </div>
                </td>
                <td className="td-3">
                  <div className="tot-amt">
                    <p className="t-amt">450</p>
                  </div>
                </td>
                <td className="td-4">
                  {" "}
                  <button className="od-btn-c">confirm</button>
                </td>
                <td className="td-5">22/07/2022</td>
                <td className="td-6">
                  <button className="od-btn-p">Packet</button>
                </td>
                <td className="td-7">
                  <button className="canl-btn">Cancel</button>
                </td>
                <td className="td-8">
                  <button>View</button>
                </td>
              </tr>
              {/* Row-3 */}
              <tr className="name-three">
                <td className="td-1">
                  <div className="item-name">
                    <p className="i-name">Mangos, Pine Apple ...</p>
                  </div>
                  <div className="item-id">
                    <p className="i-id">ID:123456</p>
                  </div>
                </td>
                <td className="td-2">
                  <div className="area-na">
                    <p className="a-name">Subash Nagar</p>{" "}
                  </div>
                </td>
                <td className="td-3">
                  <div className="tot-amt">
                    <p className="t-amt">450</p>
                  </div>
                </td>
                <td className="td-4">
                  {" "}
                  <button className="od-btn-p">Packet</button>
                </td>
                <td className="td-5">22/07/2022</td>
                <td className="td-6">
                  <button className="od-btn-o">Out</button>
                </td>
                <td className="td-7">
                  <button className="canl-btn">Cancel</button>
                </td>
                <td className="td-8">
                  <button>View</button>
                </td>
              </tr>
              {/* Row-4 */}
              <tr className="name-four">
                <td className="td-1">
                  <div className="item-name">
                    <p className="i-name">Mangos, Pine Apple ...</p>
                  </div>
                  <div className="item-id">
                    <p className="i-id">ID:123456</p>
                  </div>
                </td>
                <td className="td-2">
                  <div className="area-na">
                    <p className="a-name">Subash Nagar</p>{" "}
                  </div>
                </td>
                <td className="td-3">
                  <div className="tot-amt">
                    <p className="t-amt">450</p>
                  </div>
                </td>
                <td className="td-4">
                  {" "}
                  <button className="od-btn-o">Out</button>
                </td>
                <td className="td-5">22/07/2022</td>
                <td className="td-6">
                  <button className="od-btn-g">Delivered</button>
                </td>
                <td className="td-7">
                  <button className="canl-btn">Cancel</button>
                </td>
                <td className="td-8">
                  <button>View</button>
                </td>
              </tr>
              {/* Row-5 */}
              <tr className="name-five">
                <td className="td-1">
                  <div className="item-name">
                    <p className="i-name">Mangos, Pine Apple ...</p>
                  </div>
                  <div className="item-id">
                    <p className="i-id">ID:123456</p>
                  </div>
                </td>
                <td className="td-2">
                  <div className="area-na">
                    <p className="a-name">Subash Nagar</p>{" "}
                  </div>
                </td>
                <td className="td-3">
                  <div className="tot-amt">
                    <p className="t-amt">450</p>
                  </div>
                </td>
                <td className="td-4">
                  {" "}
                  <button className="od-btn-g">Delivered</button>
                </td>
                <td className="td-5">22/07/2022</td>
                <td className="td-6"></td>
                <td className="td-7"></td>
                <td className="td-8">
                  <button>View</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllOrders;
