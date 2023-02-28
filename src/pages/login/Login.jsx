import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BagItemsContext } from "../../context/Store";
import { toast } from "react-toastify";

const Login = () => {
  const { SaveUserData } = useContext(BagItemsContext);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, pwd);
      const user = response.user.accessToken;
      localStorage.setItem("userToken", user)
      SaveUserData();
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-2/5 addaddress-content my-24">
          <form
            onSubmit={(e) => signIn(e)}
            className="signup-form flex flex-col gap-8 py-10 px-12"
          >
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
            <button
              type="submit"
              className="btn-bag btn-order-summary w-full justify-center flex gap-2 items-center mt-4 btn-login"
            >
              Login
            </button>
            <Link to={"/signup"}>
              <p className="addaddress-back text-sm"> Create New Account</p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
