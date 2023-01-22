import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IoCard } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Addpayment = () => {
  var cardicon = <i class="fa-solid fa-credit-card"></i> + "aaaaaa";
  return (
    <>
      <div className="bg-white w-2/4 m-auto addaddress-content my-24">
        <i class="fa-solid fa-credit-card"></i>
        <div className="flex flex-col mx-10 gap-8 py-10 px-12">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cardholder Name</label>
            <input type="text" placeholder="John Maker" className="py-4 px-6" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder='&#xf09d;' className="py-4 px-6" />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-1/3">
              <label htmlFor="">Expiry Date</label>
              <input
                type="text"
                placeholder="MM / YYYY"
                className="py-4 px-6"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/4">
              <label htmlFor="">CVC</label>
              <input type="text" placeholder="123" className="py-4 px-6" />
            </div>
          </div>
          <div className="flex items-center input-checkbox input-checkbox-addpayment gap-2">
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
            Save this as your default payment method
          </div>
          <button className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 17.625C2 18.3212 2.27656 18.9889 2.76884 19.4812C3.26113 19.9734 3.92881 20.25 4.625 20.25H20.375C21.0712 20.25 21.7389 19.9734 22.2312 19.4812C22.7234 18.9889 23 18.3212 23 17.625V10.4062H2V17.625ZM5.09375 14.0625C5.09375 13.6895 5.24191 13.3319 5.50563 13.0681C5.76935 12.8044 6.12704 12.6562 6.5 12.6562H8.75C9.12296 12.6562 9.48065 12.8044 9.74437 13.0681C10.0081 13.3319 10.1562 13.6895 10.1562 14.0625V15C10.1562 15.373 10.0081 15.7306 9.74437 15.9944C9.48065 16.2581 9.12296 16.4062 8.75 16.4062H6.5C6.12704 16.4062 5.76935 16.2581 5.50563 15.9944C5.24191 15.7306 5.09375 15.373 5.09375 15V14.0625ZM20.375 3.75H4.625C3.92881 3.75 3.26113 4.02656 2.76884 4.51884C2.27656 5.01113 2 5.67881 2 6.375V7.59375H23V6.375C23 5.67881 22.7234 5.01113 22.2312 4.51884C21.7389 4.02656 21.0712 3.75 20.375 3.75V3.75Z"
                fill="white"
              />
            </svg>
            Add Payment Method
          </button>
          <div className="flex items-center justify-between">
            <Link to={"/checkout"}>
              <p className="addaddress-back"> back</p>
            </Link>
            <div className="secure-connection-text flex items-center gap-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.25 9.5H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V9.5H6.75C5.95462 9.50087 5.19206 9.81722 4.62964 10.3796C4.06722 10.9421 3.75087 11.7046 3.75 12.5V20.75C3.75087 21.5454 4.06722 22.3079 4.62964 22.8704C5.19206 23.4328 5.95462 23.7491 6.75 23.75H17.25C18.0454 23.7491 18.8079 23.4328 19.3704 22.8704C19.9328 22.3079 20.2491 21.5454 20.25 20.75V12.5C20.2491 11.7046 19.9328 10.9421 19.3704 10.3796C18.8079 9.81722 18.0454 9.50087 17.25 9.5ZM15 9.5H9V5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V9.5Z"
                  fill="#02D693"
                />
              </svg>
              Secure Connection
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addpayment;
