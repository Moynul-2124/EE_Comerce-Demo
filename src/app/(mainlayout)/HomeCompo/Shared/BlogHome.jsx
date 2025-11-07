



'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { useGetBlogQuery } from '../../../../api/upload/dataApi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function BlogHome() {
  const { data, isLoading } = useGetBlogQuery();
  const [selectedPost, setSelectedPost] = useState(null);
  const isDragging = useRef(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1.2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.05 } },
    ],
    beforeChange: () => {
      isDragging.current = true;
      setSelectedPost(null);
    },
    afterChange: () => {
      setTimeout(() => { isDragging.current = false; }, 100);
    },
  };

  return (
    <div className="py-10 px-4 max-w-screen overflow-hidden">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {data?.posts.map((post) => (
              <div key={post.id} className="px-0.5 sm:px-1">
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition w-[380px] sm:w-[820px] mx-auto"
                  onClick={() => {
                    if (!isDragging.current) setSelectedPost(post);
                  }}
                >
                  <img
                    src={post.previewImage}
                    alt={post.title}
                    className="w-full h-44 sm:h-52 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                    {/* Read More button stays only as styled element */}
                    <button
                      className="mt-3 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                      onClick={(e) => e.stopPropagation()} // Prevent modal opening
                    >
                    <Link href={`/blog/${post.id}`}> <h1> Read More</h1></Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-2 right-3 text-red-500 text-xl"
              >
                ✖
              </button>
              <img
                src={selectedPost.previewImage}
                alt={selectedPost.title}
                className="w-full h-52 object-cover rounded"
              />
              <h2 className="text-2xl font-bold mt-4">{selectedPost.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{selectedPost.excerpt}</p>
              <p className="text-sm text-gray-500 mt-4">By {selectedPost.author}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  );
}
