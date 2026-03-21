import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const { backendUrl, navigate } = useContext(ShopContext);
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      backendUrl + `/api/user/reset-password/${token}`,
      { password }
    );

    if (res.data.success) {
      toast.success("Password reset successful");
      navigate("/login");
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="max-w-sm m-auto mt-20">
      <input
        type="password"
        placeholder="New password"
        className="w-full border px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white w-full py-2 mt-4">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
