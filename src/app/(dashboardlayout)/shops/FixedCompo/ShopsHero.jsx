


"use client";
import Link from "next/link";
import React, { useState } from "react";

const images = [
  "https://www.shutterstock.com/shutterstock/photos/2599698857/display_1500/stock-photo-close-up-of-sourdough-loaf-bread-whole-grain-bakery-concept-2599698857.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2629820503/display_1500/stock-photo-empty-wooden-table-top-with-blurred-bakery-background-2629820503.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2664566501/display_1500/stock-photo-various-loaves-of-fresh-bread-cooling-on-metal-racks-in-bakery-interior-warm-lighting-and-rustic-2664566501.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2127768302/display_1500/stock-photo-preparation-of-artisanal-wheat-bread-focus-selective-2127768302.jpg",
  "https://www.shutterstock.com/shutterstock/photos/1909754683/display_1500/stock-photo-hot-homemade-bread-with-moisture-vapor-freshly-made-in-a-chilean-clay-oven-with-white-flour-and-1909754683.jpg",
  "https://www.shutterstock.com/shutterstock/photos/529190926/display_1500/stock-photo-assortment-of-baked-bread-on-white-wooden-table-background-529190926.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2599860365/display_1500/stock-photo-crispy-and-rustic-round-loaf-bread-baking-in-with-grain-bread-in-the-countryside-2599860365.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2562997577/display_1500/stock-photo-different-freshly-baked-bread-loafs-on-grey-table-closeup-2562997577.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2644770819/display_1500/stock-photo-sliced-artisanal-bread-showcases-its-airy-interior-and-golden-crust-highlighting-its-freshness-and-2644770819.jpg",
];

const ShopsHero = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev - 1) % images.length
    );
  };

  // Create the visible subset of images
  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <section
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/shutterstock/photos/2655032969/display_1500/stock-photo-wooden-table-with-pedestal-for-product-display-in-warm-sunlit-bakery-interior-background-with-2655032969.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Sidebar */}
      <aside className="bg-black/50 text-white w-full md:w-1/4 p-6 flex flex-col justify-center items-start backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6">Shop Categories</h2>
        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-300 transition">
            All Products
          </Link>
          <Link href="/category/bread" className="hover:text-yellow-300 transition">
            Bread
          </Link>
          <Link href="/category/pastry" className="hover:text-yellow-300 transition">
            Pastries
          </Link>
          <Link href="/category/sweets" className="hover:text-yellow-300 transition">
            Sweets
          </Link>
        </nav>
      </aside>

      {/* Main Hero Content */}
      <div className="flex-1 bg-black/30 text-white flex flex-col justify-center items-center px-4 py-10 relative">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Our Bakery
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Freshly baked bread, pastries, and more — straight from our oven to your table.
          </p>
        </div>

        {/* Avatar Carousel */}
        <div className="relative group w-full max-w-4xl flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ‹
          </button>

          {/* Avatars */}
          <div className="flex justify-center gap-4 sm:gap-6 overflow-hidden flex-wrap sm:flex-nowrap">
            {visibleImages.map((src, index) => (
              <div key={index} className="avatar">
                <div className="w-20 sm:w-24 md:w-28 rounded-full ring ring-offset-2 ring-white/40 hover:ring-yellow-300 transition-all duration-300">
                  <img src={src} alt={`bread-${index}`} className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopsHero;
