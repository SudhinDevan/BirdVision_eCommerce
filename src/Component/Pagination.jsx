const Pagination = ({ page, products, handlePageChange }) => {
  return (
    <>
      <div className="flex justify-center my-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`px-3 py-1 mx-2 bg-gray-200 rounded-md hover:bg-gray-400 cursor-pointer ${
            page === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={products.length < 10}
          className="px-3 py-1 mx-2 bg-gray-200 rounded-md hover:bg-gray-400 cursor-pointer"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
