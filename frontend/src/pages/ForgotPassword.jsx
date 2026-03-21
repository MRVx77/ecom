import axios from "axios";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { backendUrl } = useContext(ShopContext);
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      backendUrl + "/api/user/forgot-password",
      { email }
    );

    res.data.success
      ? toast.success(res.data.message)
      : toast.error(res.data.message);
  };

  return (
    <form onSubmit={submitHandler} className="max-w-sm m-auto mt-20">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-black text-white w-full py-2 mt-4">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;
