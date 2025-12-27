import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("modal-root");

    if (!el) {
      el = document.createElement("div");
      el.id = "modal-root";
      document.body.appendChild(el);
    }

    setPortalEl(el);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);

      requestAnimationFrame(() => {
        setActive(true);
      });
    } else if (mounted) {
      setActive(false);

      const timeout = setTimeout(() => setMounted(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, mounted]);

  if (!mounted || !portalEl) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 ease-out
          ${active ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Modal */}
      <div
        className={`
          relative z-10
          w-full max-w-lg
          bg-white rounded-2xl
          p-6 shadow-xl
          transition-all duration-300 ease-out
          ${active ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"}
        `}
      >
        <Button
          variant="ghost"
          className="absolute top-3 right-0 bg-transparent hover:bg-transparent rounded-full"
          onClick={onClose}
        >
          <img src="/close_icon.svg" alt="close" />
        </Button>
        {children}
      </div>
    </div>,
    portalEl,
  );
}
