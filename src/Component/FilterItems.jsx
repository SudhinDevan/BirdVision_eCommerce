import { useState } from "react";
import HorizontalLine from "./HorizontalLine";

const FilterItems = (props) => {
  const { itemName, checkboxesData } = props;
  const [dropDown, setDropDown] = useState(false);
  const initialCheckboxesState = Object.fromEntries(
    checkboxesData?.map((checkbox) => [checkbox.key, false]) || []
  );
  const [checkboxes, setCheckboxes] = useState(initialCheckboxesState);

  const handleDropdownClick = () => {
    setDropDown(!dropDown);
  };

  const handleCheckboxChange = (checkboxKey) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxKey]: !checkboxes[checkboxKey],
    });
  };

  const handleUnselectAll = () => {
    setCheckboxes(initialCheckboxesState);
  };

  return (
    <>
      <div className="flex justify-between mt-3">
        <h1 className="font-semibold text-gray-800">{itemName}</h1>
        {!dropDown ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 cursor-pointer"
            onClick={handleDropdownClick}
          >
            <path
              d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
              stroke="#292D32"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 cursor-pointer"
            onClick={handleDropdownClick}
          >
            <path
              d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73"
              stroke="#292D32"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div>
        <h1 className="block">All</h1>
      </div>
      <div
        className={`mt-3 ${
          dropDown
            ? "transition duration-500 ease-in opacity-100"
            : "opacity-0 transition duration-500 ease-out"
        }`}
      >
        {dropDown && checkboxesData && checkboxesData.length > 0 && (
          <div>
            <span
              className="text-gray-400 underline cursor-pointer hover:text-gray-500"
              onClick={handleUnselectAll}
            >
              Unselect All
            </span>
            {checkboxesData.map((checkbox) => (
              <div key={checkbox.key} className="mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mt-1"
                  checked={checkboxes[checkbox.key]}
                  onChange={() => handleCheckboxChange(checkbox.key)}
                />
                <span className="ml-2">{checkbox.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <HorizontalLine />
    </>
  );
};

export default FilterItems;
