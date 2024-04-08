import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopBanner from "../Component/TopBanner";
import Header from "../Component/Header";
import MenuItems from "../Component/MenuItems";
import HorizontalLine from "../Component/HorizontalLine";
import ProductDescription from "../Component/ProductDescription";
import { Bars } from "react-loader-spinner";
import Footer from "../Component/Footer";
import MiniFooter from "../Component/MiniFooter";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProductDetails(data);
      setCurrentImage(data?.thumbnail);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      {currentImage ? (
        <>
          <TopBanner />
          <Header />
          <MenuItems />
          <HorizontalLine />
          <div className="md:p-5 p-2">
            <div className="md:flex md:justify-evenly">
              <div>
                <div className="flex justify-center">
                  <img
                    src={currentImage}
                    alt="product thumbnail"
                    className="w-[420px] h-[300px] object-contain cursor-pointer"
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-2 mt-4">
                  {productDetails?.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`product image ${index}`}
                      className="w-24 h-16 cursor-pointer object-contain"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>
              {productDetails && (
                <ProductDescription productDetails={productDetails} />
              )}
            </div>
          </div>
          <div className="md:block hidden">
            <Footer />
          </div>
          <div className="md:hidden">
            <MiniFooter />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
