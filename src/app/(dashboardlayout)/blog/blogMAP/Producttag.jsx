


"use client";
import React, { useEffect, useState } from "react";
import Producttagtwo from "./Producttagtwo";
import Nametag from "./Nametag";

const Producttag = () => {
  const [products, setProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URS}/topics`);
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const filtered = selectedRating
    ? products.filter((p) => p.ratings === selectedRating)
    : products;

  return (
    <div className="flex gap-10">
      {/* Left: Nametag List */}
      <div className="w-1/3">
        <Nametag onSelect={setSelectedRating} />
      </div>

      {/* Right: Filtered Items */}
      <div className="py-8 flex flex-col gap-6">
        {filtered.map((item) => (
          <Producttagtwo key={item.ratings} fingeringkoro={item} />
        ))}
      </div>
    </div>
  );
};

export default Producttag;
