import { OrderAddress } from "@/interfaces/Order";
import { useEffect, useState } from "react";

export const useGetAddresses = () => {
  const [data, setData] = useState<OrderAddress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/my-addresses/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch addresses");
        }
        const result: OrderAddress[] = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  return { data, loading };
};
