import { useState } from "react";

const ProductCard = (props) => {
  const [liked, setLiked] = useState(true);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="md:w-72 md:h-[350px] md:m-5 flex flex-col items-center w-48 h-[225px] p-2 md:p-0">
        <div>
          <img
            src={props.productImage}
            alt="Product Image"
            className="md:w-60 md:h-72 object-contain w-32 h-36 p-2 md:p-0"
          />
        </div>
        <div className="justify-center w-full">
          <h1 className="font-semibold mt-2 text-sm text-gray-700 truncate">
            {props.productName}
          </h1>
          <div className="flex justify-between">
            <h1 className="text-gray-700 text-lg font-semibold">
              &#8377;{` `}
              {props.price}
            </h1>
            {liked ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleLike}
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
              >
                <path
                  d="M10.62 17.8096C10.28 17.9296 9.72 17.9296 9.38 17.8096C6.48 16.8196 0 12.6896 0 5.68961C0 2.59961 2.49 0.0996094 5.56 0.0996094C7.38 0.0996094 8.99 0.97961 10 2.33961C11.01 0.97961 12.63 0.0996094 14.44 0.0996094C17.51 0.0996094 20 2.59961 20 5.68961C20 12.6896 13.52 16.8196 10.62 17.8096Z"
                  fill="#EB4C6B"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
