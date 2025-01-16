"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";
import Spinner from "@/components/ui/Spinner";

const SelectAddress = dynamic(() => import("../ModalsContent/SelectAddress"), {
  loading: () => <Spinner />,
});

const SubmitError = dynamic(() => import("../ModalsContent/SubmitError"), {
  loading: () => <Spinner />,
});

const DeleteAddress = dynamic(() => import("../ModalsContent/DeleteAddress"), {
  loading: () => <Spinner />,
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
