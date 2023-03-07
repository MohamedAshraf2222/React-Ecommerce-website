import React from "react";
import ProtectedRoute from "../routes/ProtectedRoute";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
} from "../pages/index";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
