import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/slices/productSlice";

function useProducts() {
  const [data, setData] = useState(null);
  const [isLoading, seIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      setData(response.data);
      dispatch(setProducts(response.data));
      seIsLoading(false);
    } catch (error) {
      setError(error);
      seIsLoading(false);
      console.log(error);
    }
  };

  return { isLoading, data, error };
}

export default useProducts;
