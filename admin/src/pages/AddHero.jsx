import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const AddHero = ({ token }) => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [order, setOrder] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Hero image required");
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("buttonText", buttonText);
      formData.append("image", image);
      formData.append("order", order);

      const { data } = await axios.post(
        backendUrl + "/api/hero/add",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        setTitle("");
        setSubtitle("");
        setButtonText("");
        setImage(false);
        setOrder(1);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <div>
        <p className="mb-2">Hero Image</p>
        <label htmlFor="image">
          <img
            className="w-40 cursor-pointer"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
          />
        </label>
        <input
          hidden
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 py-2 w-full max-w-[500px]"
        placeholder="Title"
        required
      />

      <input
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="px-3 py-2 w-full max-w-[500px]"
        placeholder="Subtitle"
        required
      />

      <input
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        className="px-3 py-2 w-full max-w-[500px]"
        placeholder="Button Text"
        required
      />

      <input
        type="number"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className="px-3 py-2 w-full max-w-[200px]"
        placeholder="Slide Order"
        min={1}
        required
      />

      <button className="w-32 py-3 bg-black text-white">ADD HERO</button>
    </form>
  );
};

export default AddHero;
