





"use client";
import React from "react";
import { motion } from "framer-motion";

const AddCampaign = () => {
  return (
    <section className="relative mt-8 overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Animated background blur shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-72 h-72 bg-white/20 rounded-full top-10 left-[-80px] blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: [1, 1.4, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-96 h-96 bg-black/20 rounded-full bottom-[-100px] right-[-50px] blur-3xl"
        ></motion.div>
      </div>

      {/* Campaign Text */}
      <div className="relative z-10 text-center md:text-left max-w-lg">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          🎉 Black Friday Mega Sale!
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-start text-white/90 font-medium"
        >
          Get up to <span className="font-bold text-black">50% OFF</span> on all bakery products.
          Limited time only!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/collections/all"
            className="inline-block mt-6 bg-white text-orange-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-orange-100 transition-all duration-300"
          >
            Shop Now →
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 mt-10 md:mt-0"
      >
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2616848623/display_1500/stock-photo-a-close-up-view-of-crusty-sourdough-bread-showcasing-its-golden-textured-crust-and-airy-crumb-2616848623.jpg"
          alt="Discount"
          className="w-64 md:w-80 drop-shadow-xl rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default AddCampaign;
