import { useEffect, useState } from "react";
import productApi from "../../../api/ProductsApi";

export default function useProductDetail(productId) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resutl = await productApi.get(productId);
        setProduct(resutl);
        console.log("kaka", product);
      } catch (error) {
        //handle Error
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
