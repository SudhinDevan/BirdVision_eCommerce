import HorizontalLine from "./HorizontalLine";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductDescription = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLike = () => {
    setLike(!like);
  };

  const handleCart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="md:px-0 px-3 mt-5 md:mt-0">
        <h1 className="text-xl font-semibold">{productDetails?.title}</h1>
        <h2 className="text-gray-500">{productDetails?.brand}</h2>
        <h1>
          <span className="text-2xl font-semibold">
            &#8377;{` `}
            {productDetails?.price}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            {productDetails?.discountPercentage}% off
          </span>
        </h1>
        <h1>Rating: {productDetails?.rating}</h1>
        <div className="text-gray-700 my-3 w-1/2">
          <h1>{productDetails?.description}</h1>
        </div>
        <div className="flex">
          {/* Dropdown */}
          <h1 className="mt-2 mr-2">Qty:</h1>
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300 mr-5"
          >
            {quantity}
          </button>
          {isOpen && (
            <div className="absolute z-10 w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul onClick={toggleDropdown}>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setQuantity(1)}
                >
                  1
                </li>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setQuantity(2)}
                >
                  2
                </li>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setQuantity(3)}
                >
                  3
                </li>
                <li
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setQuantity(4)}
                >
                  4
                </li>
              </ul>
            </div>
          )}
          {/* Dropdown */}
          <button
            className="text-white bg-gray-800 text-sm w-36 h-10 hover:bg-gray-700"
            onClick={handleCart}
          >
            ADD TO CART
          </button>
        </div>
        <div className="mt-10">
          <HorizontalLine />
        </div>
        <div className="flex mt-5">
          {like ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleLike}
              className="mr-3"
            >
              <path
                d="M12.62 20.8097C12.28 20.9297 11.72 20.9297 11.38 20.8097C8.48 19.8197 2 15.6897 2 8.68973C2 5.59973 4.49 3.09973 7.56 3.09973C9.38 3.09973 10.99 3.97973 12 5.33973C13.01 3.97973 14.63 3.09973 16.44 3.09973C19.51 3.09973 22 5.59973 22 8.68973C22 15.6897 15.52 19.8197 12.62 20.8097Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleLike}
              className="mr-3"
            >
              <path
                d="M10.62 17.8096C10.28 17.9296 9.72 17.9296 9.38 17.8096C6.48 16.8196 0 12.6896 0 5.68961C0 2.59961 2.49 0.0996094 5.56 0.0996094C7.38 0.0996094 8.99 0.97961 10 2.33961C11.01 0.97961 12.63 0.0996094 14.44 0.0996094C17.51 0.0996094 20 2.59961 20 5.68961C20 12.6896 13.52 16.8196 10.62 17.8096Z"
                fill="#EB4C6B"
              />
            </svg>
          )}
          <h1
            className="text-sm text-gray-600 mt-1 cursor-pointer"
            onClick={handleLike}
          >
            ADD TO WISHLIST
          </h1>
        </div>
        <div className="mt-5">
          <HorizontalLine />
        </div>
        <h1 className="mt-5">Category</h1>
        <h1 className="text-gray-500">{productDetails?.category}</h1>
      </div>
    </>
  );
};

export default ProductDescription;
