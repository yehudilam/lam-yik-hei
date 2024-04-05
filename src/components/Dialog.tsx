import React from "react";

const Dialog = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`${open ? "fixed" : "hidden"} top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-screen flex justify-center items-center z-50 shadow-lg`}
      onClick={onClose}
      aria-hidden={!open}
      aria-modal
    >{children}</div>
  );
};

export default Dialog;
