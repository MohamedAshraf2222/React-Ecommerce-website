import { useContext, useEffect } from "react";
import "./App.css";
import { BagItemsContext } from "./context/Store";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  const { SaveUserData } = useContext(BagItemsContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      SaveUserData();
    }
  }, []);

  return (
    <>
        <AnimatedRoutes />
    </>
  );
}

export default App;
