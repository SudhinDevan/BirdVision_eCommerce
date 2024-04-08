import { useState } from "react";
const BannerItems = ({ filter, onFilterChange, totalItems }) => {
  const [selectedSortOption, setSelectedSortOption] = useState("RECOMMENDED");
  const [showDropdown, setShowDropdown] = useState(false);

  const filterOption = () => {
    const newFilterValue = !filter;
    onFilterChange(newFilterValue);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSortOption = (option) => {
    setSelectedSortOption(option);
    toggleDropdown();
  };

  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="flex">
          <h1>{`${totalItems} Items`}</h1>
          <div className="flex ml-16">
            <span
              className="text-gray-400 text-base underline w-44 cursor-pointer"
              onClick={filterOption}
            >
              {filter ? (
                <div className="flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <path
                      d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                      stroke="#292D32"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="w-40">HIDE FILTER</h1>
                </div>
              ) : (
                <div className="flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <path
                      d="M6.00027 2.72125L10.3469 7.06792C10.8603 7.58125 10.8603 8.42125 10.3469 8.93458L6.00027 13.2812"
                      stroke="#292D32"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h1 className="w-40">SHOW FILTER</h1>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="flex relative">
          <span
            className="font-semibold cursor-pointer"
            onClick={toggleDropdown}
          >
            {selectedSortOption}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 ml-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <path
              d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
              stroke="#292D32"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {showDropdown && (
            <div className="absolute top-8 right-0 bg-white shadow-md rounded-md mt-1 w-56 text-end">
              <div
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  selectedSortOption === "RECOMMENDED" ? "font-semibold" : ""
                }`}
                onClick={() => handleSortOption("RECOMMENDED")}
              >
                RECOMMENDED
              </div>
              {selectedSortOption === "RECOMMENDED" && (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2 left-4"
                >
                  <path
                    d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                    fill="#292D32"
                  />
                </svg>
              )}
              <div
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  selectedSortOption === "NEWEST FIRST" ? "font-semibold" : ""
                }`}
                onClick={() => handleSortOption("NEWEST FIRST")}
              >
                NEWEST FIRST
              </div>
              {selectedSortOption === "NEWEST FIRST" && (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-12 left-4"
                >
                  <path
                    d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                    fill="#292D32"
                  />
                </svg>
              )}
              <div
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  selectedSortOption === "POPULAR" ? "font-semibold" : ""
                }`}
                onClick={() => handleSortOption("POPULAR")}
              >
                POPULAR
              </div>
              {selectedSortOption === "POPULAR" && (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[86px] left-4"
                >
                  <path
                    d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                    fill="#292D32"
                  />
                </svg>
              )}
              <div
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  selectedSortOption === "PRICE: HIGH TO LOW"
                    ? "font-semibold"
                    : ""
                }`}
                onClick={() => handleSortOption("PRICE: HIGH TO LOW")}
              >
                PRICE: HIGH TO LOW
              </div>
              {selectedSortOption === "PRICE: HIGH TO LOW" && (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-32 left-4"
                >
                  <path
                    d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                    fill="#292D32"
                  />
                </svg>
              )}
              <div
                className={`cursor-pointer p-2 hover:bg-gray-100 ${
                  selectedSortOption === "PRICE: LOW TO HIGH"
                    ? "font-semibold"
                    : ""
                }`}
                onClick={() => handleSortOption("PRICE: LOW TO HIGH")}
              >
                PRICE: LOW TO HIGH
              </div>
              {selectedSortOption === "PRICE: LOW TO HIGH" && (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[166px] left-4"
                >
                  <path
                    d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                    fill="#292D32"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BannerItems;
