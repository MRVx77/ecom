import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Mul");
  const [subCategory, setSubCategory] = useState("Pastel");
  const [bestseller, setBestseller] = useState(false);
  const [status, setStatus] = useState("LIMITED STOCK");

  // Handle image selection
  const handleImages = (e) => {
    const files = [...e.target.files];

    const validFiles = files.filter(
      (file) =>
        ["image/jpeg", "image/png", "image/webp"].includes(file.type) &&
        file.size <= 5 * 1024 * 1024 // 5MB
    );

    if (validFiles.length !== files.length) {
      toast.warning(
        "Some files were rejected (only jpeg/png/webp ≤5MB allowed)"
      );
    }

    setImages(validFiles.slice(0, 4)); // Limit to max 4 images
  };

  // Remove image from preview
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Form submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      return toast.error("Please upload at least one image");
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("status", status);

      images.forEach((img, index) => {
        formData.append(`image${index + 1}`, img);
      });

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImages([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* Image Upload */}
      <div>
        <p className="mb-2">Upload Images (max 4)</p>

        <label htmlFor="images" className="cursor-pointer">
          <div className="flex gap-2">
            {images.length === 0 ? (
              <img src={assets.upload_area} className="w-20" alt="upload" />
            ) : (
              images.map((img, i) => (
                <div key={i} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    className="w-20 h-20 object-cover"
                    alt={`preview-${i}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>
        </label>
        <input
          id="images"
          type="file"
          multiple
          onChange={handleImages}
          hidden
        />
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category / Subcategory / Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Fabric Type</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Mul">Mul Cotton Sarees</option>
            <option value="Khandi">Khadi Cotton Sarees</option>
            <option value="Artisanal">Artisanal Cotton Sarees</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option value="Pastel">Pastel collection</option>
            <option value="Classic">Classic Borders</option>
            <option value="PureCotton">Pure Cotton basics</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
            required
          />
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* Product Status */}
      <div className="w-full max-w-[500px] mt-2">
        <p className="mb-2">Product Status</p>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2"
        >
          <option value="LIMITED STOCK">Limited Stock (Default)</option>
          <option value="SOLD OUT">Sold Out</option>
          <option value="NEW ARRIVAL">New Arrival</option>
          <option value="ON SALE">On Sale</option>
          <option value="BEST SELLER">Best Seller</option>
        </select>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">
        ADD
      </button>
    </form>
  );
};

export default Add;
