import { useContext } from "react";
import { Mycontext } from "../Pages/Context/Authprovider";

const Useauth = () => {
  return useContext(Mycontext);
};

export default Useauth;
