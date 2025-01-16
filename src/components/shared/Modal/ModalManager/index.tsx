"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

const SelectAddress = dynamic(() => import("../ModalsContent/SelectAddress"), {
  loading: () => <p>Loading...</p>,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal === "address" && <SelectAddress />}

      {modal === "permission" && <></>}
    </>
  );
};

export default ModalManager;
