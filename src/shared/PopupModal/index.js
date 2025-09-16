import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

export const PopupModal = ({ isOpen, onClose, children }) => {
  // Close pop up on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.warn("Portal root element not found. Please add a <div id='portal-root'></div> to your HTML.");
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Dialog"
      onClick={onClose}
    >
      <div
        className="dialog-content"
        role="document"
        onClick={(e) => e.stopPropagation()} // prevent overlay close
        tabIndex={-1}
      >
        <button
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    portalRoot
  );
};
