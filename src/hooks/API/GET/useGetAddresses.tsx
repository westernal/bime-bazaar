import { OrderAddress } from "@/interfaces/Order";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useGetAddresses = (
  addresses: OrderAddress[],
  setAddresses: Dispatch<SetStateAction<OrderAddress[]>>
) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAddresses = async (): Promise<void> => {
      if (addresses.length > 0) {
        // Don't fetch if there is already a list
        return;
      } else setLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/my-addresses/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch addresses");
        }
        const result: OrderAddress[] = await response.json();
        setAddresses(result);
      } catch (error) {
        console.error(error);
        setAddresses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [addresses.length, setAddresses]);

  return { loading };
};
