import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Search from "./containers/SearchResultPage";
import Error from "./containers/Error";
import NetworkError from "./containers/NetworkError";
import RegisterPhone from "./containers/RegisterPhone";
import RegisterOtp from "./containers/RegisterOtp";
import TrackOrder from "./containers/TrackOrder";
import SingleProduct from "./containers/SingleProduct";
import Checkout from "./containers/Checkout";
import SelectAddress from "./containers/SelectAddress";
import Cart from "./containers/Cart";
import Category from "./containers/CategoryPage";
import OrderHistory from "./containers/OrderHistory";
import OrderSuccess from "./containers/OrderSuccess";
import EmptyOrderHistory from "./containers/EmptyOrderHistory";
import AddNewAddress from "./containers/AddNewAddress";
import AddProduct from "./Admin/AddProduct";
import Products from "./Admin/Products";
import Menu from "./containers/Menu";
import AllOrders from "./Admin/AllOrders";
import Load from "./containers/Wrapper";
import EditProduct from "./Admin/EditProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/registerPhone" element={<RegisterPhone />} />
          <Route exact path="/registerOtp" element={<RegisterOtp />} />
          <Route exact path="/error" element={<Error />} />
          <Route exact path="/trackOrder" element={<TrackOrder />} />
          <Route exact path="/singleProduct" element={<SingleProduct />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/selectAddress" element={<SelectAddress />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/networkError" element={<NetworkError />} />
          <Route exact path="/orderHistory" element={<OrderHistory />} />
          <Route exact path="/orderSuccess" element={<OrderSuccess />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/addNewAddress" element={<AddNewAddress />} />
          <Route
            exact
            path="/emptyOrderHistory"
            element={<EmptyOrderHistory />}
          />
          <Route exact path="/admin/addProduct" element={<AddProduct />} />
          <Route exact path="/admin/products" element={<Products />} />
          <Route exact path="/admin/allOrders" element={<AllOrders />} />
          <Route exact path="/wrapper" element={<Load />} />
          <Route exact path="/admin/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
