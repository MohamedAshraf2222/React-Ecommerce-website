import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { BagItemsContext } from "../../context/Store";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  const { SaveUserData } = useContext(BagItemsContext);

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(auth, email, pwd);
      const user = response.user.accessToken;
      localStorage.setItem('userToken',user);
      SaveUserData();
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-2/5 addaddress-content my-24">
          <form
            onSubmit={(e) => signup(e)}
            className="signup-form flex flex-col gap-8 py-10 px-12"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="username" className="text-lg">
                First Name:
              </label>
              <input
                type="text"
                name="firstname"
                className="py-4 px-6 text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="username" className="text-lg">
                Last Name:
              </label>
              <input
                type="text"
                name="lastname"
                className="py-4 px-6 text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="username" className="text-lg">
                Email:
              </label>
              <input
                type="Email"
                name="username"
                className="py-4 px-6"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="password" className="text-lg">
                Password:
              </label>
              <input
                type="password"
                className="py-4 px-6"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                required
              />
            </div>
            <button className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center mt-4 btn-login">
              Sign Up
            </button>
            <Link to={"/login"}>
              <p className="addaddress-back text-sm">
                {" "}
                Already Have An Account
              </p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
