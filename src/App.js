import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addaddress from "./pages/addAddress/Addaddress";
import Addpayment from "./pages/addPayment/Addpayment";
import Bag from "./pages/bag/Bag";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import ItemView from "./pages/item-view/ItemView";
import Notfound from "./pages/notfound/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/itemview/:id" element={<ItemView />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addpayment" element={<Addpayment />} />
        <Route path="/addaddress" element={<Addaddress />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
