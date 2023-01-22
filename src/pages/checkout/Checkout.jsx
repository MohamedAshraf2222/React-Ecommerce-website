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
    TotalPriceSummary,
    totalPriceSummary,
  } = useContext(BagItemsContext);
  const [hover, setHover] = React.useState(-1);
  useEffect(() => {
    if (localStorage.getItem("BagItems")) {
      SaveItems();
      TotalPrice();
      TotalPriceSummary();
    }
  }, []);
  useEffect(() => {
    TotalPrice();
    TotalPriceSummary();
  }, [DecreaseQuantity, IncreaseQuantity]);

  return (
    <>
      <div className="py-14 grid checkout">
        <div className="flex flex-col gap-6">
          <div className="bg-bag-checkout bg-white text-heading-checkout p-6">
            <p>Shipping Address</p>
            <div className="flex justify-between items-start mt-6">
              <div className="flex flex-col text-xl address-font gap-2">
                <p>John Maker</p>
                <p>123 Plae Grond Street</p>
                <p>Vermont, California</p>
                <p>United States of America</p>
              </div>
              <Link to={"/addaddress"}>
                <button className="text-base btn-checkout">Change</button>
              </Link>
            </div>
          </div>

          <div className="bg-bag-checkout bg-white text-heading-checkout p-6">
            <p> Payment Method</p>
            <div className="flex justify-between items-start mt-6">
              <div className="flex flex-col text-xl address-font gap-2">
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 17.625C1.5 18.3212 1.77656 18.9889 2.26884 19.4812C2.76113 19.9734 3.42881 20.25 4.125 20.25H19.875C20.5712 20.25 21.2389 19.9734 21.7312 19.4812C22.2234 18.9889 22.5 18.3212 22.5 17.625V10.4062H1.5V17.625ZM4.59375 14.0625C4.59375 13.6895 4.74191 13.3319 5.00563 13.0681C5.26935 12.8044 5.62704 12.6562 6 12.6562H8.25C8.62296 12.6562 8.98065 12.8044 9.24437 13.0681C9.50809 13.3319 9.65625 13.6895 9.65625 14.0625V15C9.65625 15.373 9.50809 15.7306 9.24437 15.9944C8.98065 16.2581 8.62296 16.4062 8.25 16.4062H6C5.62704 16.4062 5.26935 16.2581 5.00563 15.9944C4.74191 15.7306 4.59375 15.373 4.59375 15V14.0625ZM19.875 3.75H4.125C3.42881 3.75 2.76113 4.02656 2.26884 4.51884C1.77656 5.01113 1.5 5.67881 1.5 6.375V7.59375H22.5V6.375C22.5 5.67881 22.2234 5.01113 21.7312 4.51884C21.2389 4.02656 20.5712 3.75 19.875 3.75Z"
                      fill="#1A1F16"
                    />
                  </svg>
                  Master Card <span>ending in 2024</span>
                </div>
                <div className="flex gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 19.5C3.75 20.2957 4.06607 21.0587 4.62868 21.6213C5.19129 22.1839 5.95435 22.5 6.75 22.5H11.0625C11.1122 22.5 11.1599 22.4803 11.1951 22.4451C11.2302 22.4099 11.25 22.3622 11.25 22.3125V13.6875C11.25 13.6378 11.2302 13.5901 11.1951 13.5549C11.1599 13.5198 11.1122 13.5 11.0625 13.5H4.125C4.02554 13.5 3.93016 13.5395 3.85984 13.6098C3.78951 13.6802 3.75 13.7755 3.75 13.875V19.5ZM11.25 11.8125V6.75H12.75V11.8125C12.75 11.8622 12.7698 11.9099 12.8049 11.9451C12.8401 11.9802 12.8878 12 12.9375 12H19.5C19.7555 12 20.0091 11.9564 20.25 11.8711C20.6883 11.7155 21.0677 11.4281 21.3363 11.0484C21.6048 10.6686 21.7493 10.2151 21.75 9.75V9C21.75 8.40327 21.5129 7.83097 21.091 7.40901C20.669 6.98706 20.0967 6.75 19.5 6.75H17.5997C17.5834 6.74974 17.5674 6.74522 17.5533 6.73689C17.5393 6.72855 17.5277 6.71669 17.5196 6.70248C17.5116 6.68828 17.5074 6.67221 17.5074 6.65588C17.5075 6.63955 17.5118 6.62352 17.52 6.60938C17.954 5.87667 18.0949 5.00698 17.9146 4.1747C17.7343 3.34242 17.246 2.60909 16.5476 2.12174C15.8492 1.63438 14.9925 1.42905 14.1491 1.5469C13.3057 1.66475 12.538 2.09708 12 2.75719C11.462 2.09708 10.6943 1.66475 9.85092 1.5469C9.00752 1.42905 8.15075 1.63438 7.4524 2.12174C6.75405 2.60909 6.26574 3.34242 6.0854 4.1747C5.90506 5.00698 6.04602 5.87667 6.48 6.60938C6.48817 6.62352 6.4925 6.63955 6.49257 6.65588C6.49263 6.67221 6.48843 6.68828 6.48038 6.70248C6.47233 6.71669 6.46071 6.72855 6.44666 6.73689C6.43262 6.74522 6.41664 6.74974 6.40031 6.75H4.5C3.90326 6.75 3.33097 6.98706 2.90901 7.40901C2.48705 7.83097 2.25 8.40327 2.25 9V9.75C2.25066 10.2151 2.39517 10.6686 2.66372 11.0484C2.93227 11.4281 3.3117 11.7155 3.75 11.8711C3.99085 11.9564 4.24449 12 4.5 12H11.0625C11.1122 12 11.1599 11.9802 11.1951 11.9451C11.2302 11.9099 11.25 11.8622 11.25 11.8125ZM12.75 4.875C12.75 4.50416 12.86 4.14165 13.066 3.83331C13.272 3.52497 13.5649 3.28464 13.9075 3.14273C14.2501 3.00081 14.6271 2.96368 14.9908 3.03603C15.3545 3.10838 15.6886 3.28695 15.9508 3.54918C16.213 3.8114 16.3916 4.14549 16.464 4.50921C16.5363 4.87292 16.4992 5.24992 16.3573 5.59253C16.2154 5.93515 15.975 6.22798 15.6667 6.43401C15.3584 6.64004 14.9958 6.75 14.625 6.75H12.75V4.875ZM9.24094 3.00469C9.49781 2.98628 9.75572 3.02098 9.9986 3.10663C10.2415 3.19228 10.4641 3.32705 10.6526 3.50252C10.8411 3.678 10.9914 3.89043 11.0942 4.12656C11.197 4.36269 11.25 4.61747 11.25 4.875V6.75H9.375C8.89017 6.74876 8.42466 6.55976 8.07619 6.22267C7.72771 5.88558 7.52336 5.42661 7.50601 4.94209C7.48867 4.45757 7.65968 3.98516 7.98316 3.62401C8.30664 3.26287 8.75744 3.04107 9.24094 3.00516V3.00469ZM12.9375 22.5H17.25C18.0456 22.5 18.8087 22.1839 19.3713 21.6213C19.9339 21.0587 20.25 20.2957 20.25 19.5V13.875C20.25 13.7755 20.2105 13.6802 20.1402 13.6098C20.0698 13.5395 19.9745 13.5 19.875 13.5H12.9375C12.8878 13.5 12.8401 13.5198 12.8049 13.5549C12.7698 13.5901 12.75 13.6378 12.75 13.6875V22.3125C12.75 22.3622 12.7698 22.4099 12.8049 22.4451C12.8401 22.4803 12.8878 22.5 12.9375 22.5Z"
                      fill="#1A1F16"
                    />
                  </svg>
                  $ 53.21 <span>gift card balance</span>
                </div>
                <div className="flex items-center input-checkbox gap-2">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="checkbox"
                    hidden
                    // checked='checked'
                  />
                  <label htmlFor="checkbox" className="checkbox-label flex flex-col">
                    <div className="label-border"></div>
                  </label>
                    Billing address same as Shipping Address
                </div>
              </div>
              <Link to={"/addpayment"}>
                <button className="text-base btn-checkout">Change</button>
              </Link>
            </div>
          </div>
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
                    <div className="line-items"></div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="order-summary p-4 bg-white">
            <h2>Order Summary</h2>
            <div className="flex gap-4 mt-4 flex-col">
              <div className="flex justify-between">
                <p>Items:</p> $ {totalPrice}
              </div>
              <div className="flex justify-between">
                <p>Shipping:</p> $ 6.99
              </div>
              <div className="flex justify-between">
                <p>Estimated GS:</p> $ 760.41
              </div>
              <div className="flex justify-between">
                <p>Gift Card:</p> $ 0.00
              </div>
              <div className="line-order-summary"></div>
              <div className="flex justify-between">
                <p>Order Total:</p> $ {totalPriceSummary}
              </div>
              <div className="line-order-summary"></div>
              <Link to={"/checkout"}>
                <button className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center">
                  Place your order
                </button>
              </Link>
            </div>
          </div>
          <Link className="self-end mr-24 mt-6" to={"/bag"}>
            <button className="text-base btn-checkout gap-2 flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.375 5.25L8.625 12L15.375 18.75"
                  stroke="#1A1F16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
