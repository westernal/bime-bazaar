import { OrderInfo } from "@/interfaces/Order";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSubmitInsurance = (shouldReplaceRoute?: boolean) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitInsurance = async (data: OrderInfo): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/order/completion/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );

      const newData = await response.json();

      if (newData.errors) {
        alert(newData.errors[0]);
      }

      if (!response.ok) {
        throw new Error("Failed to submit insurance");
      }

      if (shouldReplaceRoute) {
        router.replace("/successful-submit");
      } else {
        router.push("/successful-submit");
      }
    } catch (error) {
      alert(error);
      router.push("/?modal=error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitInsurance };
};
