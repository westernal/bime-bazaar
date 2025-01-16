"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

const SelectAddress = dynamic(() => import("../ModalsContent/SelectAddress"), {
  loading: () => <p>Loading...</p>,
});

const SubmitError = dynamic(() => import("../ModalsContent/SubmitError"), {
  loading: () => <p>Loading...</p>,
});

const DeleteAddress = dynamic(() => import("../ModalsContent/DeleteAddress"), {
  loading: () => <p>Loading...</p>,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      {modal === "address" && <SelectAddress />}

      {modal === "delete" && <DeleteAddress />}

      {modal === "error" && <SubmitError />}
    </>
  );
};

export default ModalManager;
