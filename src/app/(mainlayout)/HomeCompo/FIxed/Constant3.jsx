



'use client';
import React from 'react';
import { motion } from 'framer-motion';

const instagramImages = [
  {
    id: 1,
    src: 'https://www.shutterstock.com/shutterstock/photos/2654922803/display_1500/stock-vector-bakery-food-logo-template-bakery-logo-icon-vector-illustration-2654922803.jpg',
  },
  {
    id: 2,
    src: 'https://www.shutterstock.com/shutterstock/photos/2002244627/display_1500/stock-vector-bake-shop-logo-in-white-background-2002244627.jpg',
  },
  {
    id: 3,
    src: 'https://www.shutterstock.com/shutterstock/photos/2672982355/display_1500/stock-vector-bakery-logo-vector-illustration-elegant-bakery-logo-design-with-wheat-and-rolling-pin-for-branding-2672982355.jpg',
  },
  {
    id: 4,
    src: 'https://www.shutterstock.com/shutterstock/photos/2584967449/display_1500/stock-vector-bakery-logo-vector-illustration-for-vintage-retro-style-baked-food-template-featuring-simple-2584967449.jpg',
  },
  {
    id: 5,
    src: 'https://www.shutterstock.com/shutterstock/photos/626582606/display_1500/stock-vector-bakery-shop-emblem-labels-logo-and-design-elements-fresh-bread-and-wheat-vector-illustration-626582606.jpg',
  },
  {
    id: 6,
    src: 'https://www.shutterstock.com/shutterstock/photos/2476143401/display_1500/stock-vector-bread-with-rolling-pin-logo-classic-food-snack-vector-design-2476143401.jpg',
  },
];

export default function Constant3() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          BEKAY ON INSTAGRAM
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
          {instagramImages.map((img) => (
            <motion.a
              key={img.id}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={`Instagram ${img.id}`}
                className="w-full h-32 sm:h-40 object-cover transition duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
