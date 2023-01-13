import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BagItemsContext } from "../../context/Store";
import { RadioGroup, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { green } from "@mui/material/colors";

const Checkout = () => {
  const {
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
  } = useContext(BagItemsContext);
  const [hover, setHover] = React.useState(-1);
  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
      TotalPrice();
    }
  }, []);
  useEffect(() => {
    TotalPrice();
  }, [DecreaseQuantity, IncreaseQuantity]);

  return (
    <>
      <div className="py-14 grid checkout">
        <div className="flex flex-col gap-6">
          <div className="bg-bag-checkout bg-white text-heading-checkout p-6">
            <p>Shipping Address</p>
            </div>
          <div className="bg-bag-checkout bg-white">Payment Method</div>
          <div className="bagpage-content bg-bag-checkout bg-white">
            <p className="p-6 text-heading-checkout">Review you Bag</p>
            <div className="flex flex-col gap-6 mt-9 mb-10">
              {bagItems.map((product) => (
                <>
                  <div className="bg-white bg-box-bag">
                    <div className="py-4 px-6 gap-4">
                      <img src={product.image} alt="" />
                      <div className="flex flex-col gap-2 box-bag-content">
                        <span>{product.name}</span>
                        <span>{product.detail}</span>
                        <p className="mt-2">{product.bagDescription}</p>
                        <div className="flex gap-2 my-3">
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            // getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(bagItems.rate);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ color: green }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <span className="itemview-rating-font">
                            {product.rate} / 5
                          </span>
                        </div>
                        <div className="flex justify-between mt-5">
                          <span>
                            $ {product.price} x {product.quantity}
                          </span>
                          <div className="quantity-bag flex gap-6 mr-10">
                            <button
                              onClick={() => (
                                DecreaseQuantity(product.id),
                                DeleteProduct(product.id)
                              )}
                            >
                              -
                            </button>
                            {product.quantity}
                            <button
                              onClick={() => IncreaseQuantity(product.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="order-summary mr-3">order-summary</div>
      </div>
    </>
  );
};

export default Checkout;
