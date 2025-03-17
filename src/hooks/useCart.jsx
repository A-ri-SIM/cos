import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery({
    queryKey: ["cart", uid || ""],
    queryFn: async () => {
      if (!uid) return [];
      const cartData = await getCart(uid);
      return cartData || [];
    },
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", uid]);
    },
  });

  const removeItem = useMutation({
    mutationFn: (product) => removeFromCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
