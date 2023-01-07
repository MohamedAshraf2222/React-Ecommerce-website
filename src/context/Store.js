import { createContext, useState } from "react";
import { data } from "../data/data";

export const BagItemsContext = createContext();

export const BagContextProvider = (props) => {
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState(4);

  const SaveItems = () => {
    const item = JSON.parse(localStorage.getItem("BagItems"));
    setBagItems(item);
  };
  const SetItem = (id) => {
    const item = data.find((pro) => pro.id == id);
    const allItems = [...bagItems];
    allItems.push(item);
    setBagItems(allItems);

    localStorage.setItem("BagItems", JSON.stringify(allItems));
    const x = localStorage.getItem("BagItems");
    console.log(x);
  };

  const TotalPrice = () => {
    let total = 0;
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
    for (let i = 0; i < bagData.length; i++) {
      total = total + bagData[i].price;
    }
    total = Math.round(total * 100) / 100;
    setTotalPrice(total);
  };
  const RatingValue = () => {
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
  };
  const Countproducts = (id) => {
    let bagData = JSON.parse(localStorage.getItem("BagItems"));
    let count = 0;
    for (let i = 0; i < bagData.length; i++) {
      if (bagData[i].id == id) {
        count = count + 1;
      }
      return count + 1;
    }
  };

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
        bagItems,
        setBagItems,
        SaveItems,
        SetItem,
        TotalPrice,
        totalPrice,
        value,
        RatingValue,
        Countproducts,
      }}
    >
      {props.children}
    </BagItemsContext.Provider>
  );
};
