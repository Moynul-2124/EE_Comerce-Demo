



'use client';
import React from 'react';
import { useGetProductsQuery } from '../../../../api/upload/dataApi';
import { motion } from 'framer-motion';

export default function HomeFeature() {
  const { data, isLoading } = useGetProductsQuery();
  const items = data?.items || [];

  return (
    <section className="w-full bg-[#C19D56] py-12 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {data?.sectionTitle || 'Featured Products'}
        </h2>

        {isLoading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 20,
            }}
          >
            {[...items, ...items].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[240px] sm:min-w-[260px] bg-white rounded-lg shadow-md p-4 flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                
                <span className="text-xs font-medium text-green-600">{item.stock}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
