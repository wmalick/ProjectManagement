import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import AddProjectButton from "./AddProjectButton";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialogRef}
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <AddProjectButton>CLOSE</AddProjectButton>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
