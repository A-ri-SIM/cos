import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, imageUrls }) => addNewProduct(product, imageUrls),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { productsQuery, addProduct };
}
