import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { data } from "../data/data";

export const BagItemsContext = createContext();

export const BagContextProvider = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceSummary, setTotalPriceSummary] = useState(0);
  const [value, setValue] = useState(4);

  const [userData, setUserData] = useState(null)
  function logout() {
    setUserData(null);
    localStorage.removeItem('userToken');
    Navigate('/login');
  }
  function SaveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  const SaveItems = () => {
    const item = JSON.parse(localStorage.getItem("BagItems"));
    setBagItems(item);
  };
  const SetItem = (id) => {
    const item = data.find((pro) => pro.id == id);
    const allItems = [...bagItems];
    let condition = false;
    let i = 0;
    for (i = 0; i < allItems.length; i++) {
      if (allItems[i].id === id) {
        condition = true;
      }
    }
    if (condition) {
      allItems[i - 1].quantity = allItems[i - 1].quantity + 1;
    } else if (!condition) {
      allItems.push(item);
      allItems[i].quantity = allItems[i].quantity + 1;
    }
    setBagItems(allItems);
    localStorage.setItem("BagItems", JSON.stringify(allItems));
    // } else {
    //   for (let i = 0; i < allItems.length; i++) {
    //     if (!allItems[i].id === id) {
    //       allItems.push(item);
    //       allItems[i].quantity = 1;
    //       break;
    //     } else {
    //       allItems[i].quantity = allItems[i].quantity + 1;
    //       console.log("else");
    //     }
    //   }
    // }
    // console.log(allItems);
    // console.log(allItems[0]);
    // localStorage.setItem("BagItems", JSON.stringify(allItems));
    // const x = localStorage.getItem("BagItems");
    // console.log(x);
  };

  const TotalPrice = () => {
    let total = 0;
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
    for (let i = 0; i < bagData.length; i++) {
      total = total + bagData[i].price * bagData[i].quantity;
    }
    total = Math.round(total * 100) / 100;
    setTotalPrice(total);
  };
  const TotalPriceSummary = () => {
    TotalPrice();
    let total = totalPrice + 6.99 + 760.41;
    total = Math.round(total * 100) / 100;
    setTotalPriceSummary(total);
  };
  const RatingValue = (id) => {
    // let bagData = JSON.parse(localStorage.getItem("BagItems"));
    const item = data.find((pro) => pro.id == id);
    let ratevvv = item.rate;
    return ratevvv;
  };
  const IncreaseQuantity = (id) => {
    const allItems = [...bagItems];
    let i = 0;
    for (i = 0; i < allItems.length; i++) {
      if (allItems[i].id === id) {
        break;
      }
    }
    allItems[i].quantity += 1;
    setBagItems(allItems);
    localStorage.setItem("BagItems", JSON.stringify(allItems));
  };
  const DecreaseQuantity = (id) => {
    const allItems = [...bagItems];
    let i = 0;
    for (i = 0; i < allItems.length; i++) {
      if (allItems[i].id === id) {
        break;
      }
    }
    allItems[i].quantity -= 1;
    setBagItems(allItems);
    localStorage.setItem("BagItems", JSON.stringify(allItems));
  };
  const DeleteProduct = (id) => {
    const item = [...bagItems];
    let i = 0;
    for (i = 0; i < item.length; i++) {
      if (item[i].quantity === 0) {
        item.splice(i, 1);
      }
    }

    setBagItems(item);
    localStorage.setItem("BagItems", JSON.stringify(item));
  };

  //   const Countproducts = (id) => {
  //     let bagData = JSON.parse(localStorage.getItem("BagItems"));
  //     let count = 0;
  //     for (let i = 0; i < bagData.length; i++) {
  //       if (bagData[i].id == id) {
  //         count = count + 1;
  //       }
  //       return count + 1;
  //     }
  //   };

  //   const displaycount = (id) => {
  //     let bagData = JSON.parse(localStorage.getItem("BagItems"));
  //     for (let i = 0; i < bagData.length; i++) {
  //         if (bagData[i].id == id) {
  //           count = count + 1;
  //         }
  //         return count + 1;
  //       }
  //   };

  return (
    <BagItemsContext.Provider
      value={{
        SaveUserData,
        logout,
        bagItems,
        setBagItems,
        SaveItems,
        SetItem,
        TotalPrice,
        totalPrice,
        value,
        setValue,
        RatingValue,
        IncreaseQuantity,
        DecreaseQuantity,
        DeleteProduct,
        TotalPriceSummary,
        totalPriceSummary,
      }}
    >
      {props.children}
    </BagItemsContext.Provider>
  );
};
