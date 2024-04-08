import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
