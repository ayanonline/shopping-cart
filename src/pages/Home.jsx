import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import ShimmerProductCard from "../components/ShimmerProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/actions/getProducts";

const Home = () => {
  const { isLoading, products, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect called");
    dispatch(getProducts());
  }, []);

  if (isLoading)
    return (
      <div className="my-5 flex flex-wrap justify-center gap-4">
        {Array.from({ length: 10 }).map((item, index) => (
          <ShimmerProductCard key={index} />
        ))}
      </div>
    );

  return (
    <div className="my-5 flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
