import axios from "axios";
import { useEffect, useState } from "react";

function useProducts() {
  const [data, setData] = useState(null);
  const [isLoading, seIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const responce = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      setData(responce.data);
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
