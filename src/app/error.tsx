"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-full bg-blend-color h-screen">
      <h1>Hubo un error</h1>
      <span>{error.message}</span>
      <button onClick={() => reset()}>Volver a intentar</button>
    </div>
  );
};

export default error;
