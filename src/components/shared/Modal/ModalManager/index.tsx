"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

const AddressList = dynamic(() => import("../ModalsContent/AddressList"), {
  loading: () => <p>Loading...</p>,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal === "list" && <AddressList />}

      {modal === "permission" && <></>}
    </>
  );
};

export default ModalManager;
