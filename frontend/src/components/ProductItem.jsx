import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const ProductItem = ({ id, images, name, price, status, priority }) => {
  const { currency, addToCart } = useContext(ShopContext);

  return (
    <div className="group relative">
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div
          className="
            relative overflow-hidden rounded-lg border bg-white shadow-sm transition-transform duration-300 md:group-hover:shadow-md"
        >
          {/* Status badge */}
          {status && (
            <span
              className="
                absolute top-0 right-0 z-10
                bg-gray-800 text-white
                text-[10px] sm:text-xs
                font-semibold
                px-2 py-0.5
                rounded
                max-w-[80%]
                truncate
              "
            >
              {status}
            </span>
          )}

          {/* Image (NO layout shift) */}
          <div className="relative w-full aspect-4/5 bg-gray-100 overflow-hidden">
            <img
              src={images[0]}
              alt={name}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="
                absolute inset-0 w-full h-full object-cover
                will-change-transform
                md:group-hover:scale-105
              "
            />
          </div>

          {/* Details */}
          <div className="p-3">
            <p className="text-sm sm:text-base font-medium truncate">{name}</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                {currency}
                {price + 561}
              </span>
              <span className="text-gray-400">-</span>
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                {currency}
                {price}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Add to cart */}
      {status !== "SOLD OUT" && (
        <button
          onClick={() => addToCart(id)}
          className="
            absolute bottom-2 right-2 sm:bottom-4 sm:right-4
            bg-white border shadow-md
            p-1.5 sm:p-2
            rounded-full
            transition-transform duration-200
            hover:scale-110
            opacity-100
            md:opacity-0 md:group-hover:opacity-100
    "
        >
          <img
            src={assets.cart_icon}
            className="w-4 h-4 sm:w-5 sm:h-5"
            alt="Add to cart"
          />
        </button>
      )}
    </div>
  );
};

export default React.memo(ProductItem);
