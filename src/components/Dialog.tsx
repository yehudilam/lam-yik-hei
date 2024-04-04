import React from 'react';

const Dialog = ({
  open,
  closeModal,
  children,
}:{
  open: boolean,
  closeModal: () => void,
  children?: React.ReactNode,
}) => {
  return (
    <div
          className={`${open ? "fixed" : "hidden"} top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-screen flex justify-center items-center z-50 shadow-lg`}
          onClick={closeModal}
          aria-hidden={!open}
          aria-modal
        ></div>
  );
};

export default Dialog;
