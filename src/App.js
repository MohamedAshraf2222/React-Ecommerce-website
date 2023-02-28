import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BagItemsContext } from "./context/Store";
// import Addaddress from "./pages/addAddress/Addaddress";
// import Addpayment from "./pages/addPayment/Addpayment";
// import Bag from "./pages/bag/Bag";
// import Checkout from "./pages/checkout/Checkout";
// import Home from "./pages/home/Home";
// import ItemView from "./pages/item-view/ItemView";
// import Login from "./pages/login/Login";
// import Notfound from "./pages/notfound/Notfound";
// import Signup from "./pages/signup/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";

import {
  Addaddress,
  Addpayment,
  Bag,
  Checkout,
  Home,
  ItemView,
  Login,
  Notfound,
  Signup,
} from "./pages/index";

function App() {
  const { SaveUserData } = useContext(BagItemsContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      SaveUserData();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/itemview/:id"
          element={
            <ProtectedRoute>
              <ItemView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bag"
          element={
            <ProtectedRoute>
              <Bag />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addpayment"
          element={
            <ProtectedRoute>
              <Addpayment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addaddress"
          element={
            <ProtectedRoute>
              <Addaddress />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
