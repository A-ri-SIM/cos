import React from "react";

export default function PriceCard({ text, price }) {
  const formattedPrice = Number(price).toLocaleString();
  return (
    <div>
      <p>{text}</p>
      <p className="fw-bolder">{`￦ ${formattedPrice}`}</p>
    </div>
  );
}
