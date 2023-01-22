import React from "react";
import { Link } from "react-router-dom";

const Addaddress = () => {
  return (
    <>
      <div className="bg-white w-2/4 m-auto addaddress-content my-24">
        <div className="flex flex-col mx-10 gap-8 py-10 px-12">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Shipping Name</label>
            <input type="text" placeholder="John Maker" className="py-4 px-6" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Street Name</label>
            <input
              type="text"
              placeholder="123 Plae Grond Stret"
              className="py-4 px-6"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">City</label>
            <input type="text" placeholder="Vermont" className="py-4 px-6" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">State / Province</label>
            <input type="text" placeholder="California" className="py-4 px-6" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Country</label>
            <input
              type="text"
              placeholder="United States of America"
              className="py-4 px-6"
            />
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
            Save this as your default address
          </div>
          <button className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center">
            Add Address
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

export default Addaddress;
