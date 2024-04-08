import FilterItems from "./FilterItems";
import HorizontalLine from "./HorizontalLine";

const Filters = () => {
  return (
    <>
      <div className="w-36">
        <div className="py-3 flex my-3">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <h1 className="text-sm font-semibold text-gray-600 pl-3">
            CUSTOMIZABLE
          </h1>
        </div>
        <HorizontalLine />
        <FilterItems
          itemName="IDEAL FOR"
          checkboxesData={[
            { key: "men", label: "Men" },
            { key: "women", label: "Women" },
            { key: "kids", label: "Kids" },
          ]}
        />
        <FilterItems itemName="OCCASSION" />
        <FilterItems itemName="WORK" />
        <FilterItems itemName="FABRIC" />
        <FilterItems
          itemName="SEGMENT"
          checkboxesData={[
            { key: "men", label: "Men" },
            { key: "kids", label: "Kids" },
          ]}
        />
        <FilterItems itemName="SUITABLE FOR" />
        <FilterItems itemName="RAW MATERIALS" />
        <FilterItems itemName="PATTERN" />
      </div>
    </>
  );
};

export default Filters;
