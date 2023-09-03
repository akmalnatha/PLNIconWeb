import { ReactNode } from "react";

function Modal({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: VoidFunction;
  children: ReactNode;
}) {
  const handleOnClose = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (document.getElementById("container") == event.target) {
      onClose();
    }
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={(e) => handleOnClose(e)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div className="w-fit max-w-[85%] h-fit max-h-[90%] overflow-auto rounded-xl bg-white px-2 xl:px-4 py-2 xl:py-4">
        {children}
      </div>
    </div>
  );
}

export default Modal;