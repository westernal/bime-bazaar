"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
import DeleteAddress from "../ModalsContent/DeleteAddress";

const SelectAddress = dynamic(() => import("../ModalsContent/SelectAddress"), {
  loading: () => <p>Loading...</p>,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal === "address" && <SelectAddress />}

      {modal === "delete" && <DeleteAddress />}
    </>
  );
};

export default ModalManager;
