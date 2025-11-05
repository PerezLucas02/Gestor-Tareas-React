import React from "react";

const Watermark = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "15px",
        opacity: 0.7,
        fontSize: "0.9rem",
        fontWeight: "bold",
        color: "#292929", // color azul Bootstrap
        zIndex: 9999,
        pointerEvents: "none", // no bloquea clics
      }}
    >
      © Perez Lucas
    </div>
  );
};

export default Watermark;