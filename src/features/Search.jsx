import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/slices/productSlice";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  const { isLoading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    searchHandler();
  }, [searchQuery]);

  // for storing all products
  useEffect(() => {
    setAllProducts(products);
  }, [isLoading]);

  // search logic
  const searchHandler = () => {
    const result = allProducts?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    dispatch(setProducts(result));
  };
  return (
    <div className="flex w-2/3 items-center rounded-md border p-2">
      <LiaSearchSolid />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="text"
        className="bg-black px-2 text-xs outline-none lg:text-base"
        placeholder="search by name"
      />
    </div>
  );
};

export default Search;
