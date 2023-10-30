import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import ShimmerProductCard from "../components/ShimmerProductCard";

const Home = () => {
  const { isLoading, data: products } = useProducts();

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
