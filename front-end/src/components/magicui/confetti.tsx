"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export function ConfettiAnimation() {
  useEffect(() => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 20);
    setTimeout(shoot, 40);
  }, []);

  return null;
}

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
}

export function SuccessToast({ show, onClose }: SuccessToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const fadeOutTimer = setTimeout(() => setVisible(false), 2700);
      const removeTimer = setTimeout(() => onClose(), 3000);
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`bg-white text-black border-gray-500 rounded-lg shadow-lg border-2 brightness-125 p-10 max-w-xs
          transition-all duration-300 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        role="alert"
      >
        <h1 className="text-sm font-semibold">Cadastrado com sucesso. ✅🌟</h1>
        <h3>seu desconto sera liberado em breve...</h3>
      </div>
    </div>
  );
}
