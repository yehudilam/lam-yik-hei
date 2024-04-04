import React from "react";

const IconButton = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <button
      onClick={closeModal}
      aria-label="Close modal"
      className="absolute right-2 top-2 cursor-pointer hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default IconButton;
