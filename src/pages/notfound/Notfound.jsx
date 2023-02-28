import React from "react";
import {  useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center h-screen">
        <div className="font-bold text-5xl text-red-600 text-center">
          Error 404 Not Found
        </div>
        {/* <Link to> */}
        <button onClick={()=>goBack()} className="text-stone-700 underline text-xl">back</button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default Notfound;
