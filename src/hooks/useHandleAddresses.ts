import { useRouter } from "next/navigation";
import { useGetAddresses } from "./API/GET/useGetAddresses";
import { useAddressContext } from "./context/useAddressContext";

export const useHandleAddresses = () => {
  const { setAddresses, addresses, setDeletingAddress } = useAddressContext();
  const { loading } = useGetAddresses(addresses, setAddresses);
  const router = useRouter();

  const openDeleteModal = (id: string) => {
    setDeletingAddress(addresses.find((item) => item.id === id));

    router.push("/?modal=delete", { scroll: false });
  };

  return { addresses, loading, openDeleteModal };
};
