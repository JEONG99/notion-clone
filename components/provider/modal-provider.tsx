"use client";

import { useEffect, useState } from "react";

import SettingModal from "@/components/modals/setting-modal";
import CoverImageModal from "@/components/modals/cover-image-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
