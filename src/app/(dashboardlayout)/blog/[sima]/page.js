



'use client';

import React from 'react';
import { useGetBlogQuery } from '../../../../api/upload/dataApi';
import BlogHome from '@/app/(mainlayout)/HomeCompo/Shared/BlogHome';

export default function ProjectsPage({ params }) {
  const { sima } = params;
  const { data, isLoading } = useGetBlogQuery();

  const filteredPosts = data?.posts.filter((post) => post.id === sima);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* ---- MAIN CONTENT WRAPPER ---- */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 w-full lg:w-11/12 pt-12 px-4">

        {/* ---- BLOG DETAILS SECTION ---- */}
        <div className="w-full lg:w-3/4 bg-zinc-900 rounded-lg shadow-lg p-4 border border-zinc-800">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <ul>
              {filteredPosts.map((project) => (
                <li key={project.id} className="mb-10">
                  <div className="hero min-h-[60vh] bg-zinc-800 rounded-lg overflow-hidden">
                    <div className="hero-content flex-col lg:flex-row gap-6 p-6">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="max-w-xs sm:max-w-sm rounded-lg shadow-2xl object-cover"
                      />
                      <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-amber-400">
                          {project.excerpt}
                        </h1>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                          {project.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ---- SIDEBAR (Bakery Categories) ---- */}
        <div className="w-full lg:w-[22%] bg-gradient-to-br from-orange-50 to-yellow-100 border border-amber-200 text-black rounded-lg overflow-y-auto max-h-[90vh]">
          <div className="p-4">
            <h1 className="text-xl font-bold text-center mb-6 text-amber-800">
              🍞 Bakery Categories
            </h1>

            <div className="space-y-3">
              {[
                {
                  title: 'Breads',
                  items: [
                    { name: 'Sourdough Loaf', price: '$4.50' },
                    { name: 'Whole Wheat', price: '$3.80' },
                    { name: 'Baguette', price: '$2.90' },
                  ],
                },
                {
                  title: 'Pastries',
                  items: [
                    { name: 'Croissant', price: '$2.50' },
                    { name: 'Danish Swirl', price: '$3.20' },
                    { name: 'Pain au Chocolat', price: '$3.00' },
                  ],
                },
                {
                  title: 'Cakes',
                  items: [
                    { name: 'Chocolate Cake', price: '$15' },
                    { name: 'Cheesecake', price: '$12' },
                    { name: 'Red Velvet', price: '$14.50' },
                  ],
                },
                {
                  title: 'Cookies',
                  items: [
                    { name: 'Chocolate Chip', price: '$5' },
                    { name: 'Oatmeal Raisin', price: '$4.50' },
                  ],
                },
                {
                  title: 'Muffins',
                  items: [
                    { name: 'Blueberry', price: '$3' },
                    { name: 'Banana Nut', price: '$3.20' },
                  ],
                },
                {
                  title: 'Pies',
                  items: [
                    { name: 'Apple Pie', price: '$10' },
                    { name: 'Pumpkin Pie', price: '$9.50' },
                  ],
                },
                {
                  title: 'Specialty',
                  items: [
                    { name: 'Gluten-Free', price: '$4.90' },
                    { name: 'Vegan Brownie', price: '$3.70' },
                  ],
                },
              ].map((cat, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-lg shadow p-3 border text-amber-800"
                >
                  <summary className="flex flex-col items-center cursor-pointer text-lg font-semibold">
                    <span>{cat.title}</span>
                    <span className="text-sm text-amber-600">Show Items ▼</span>
                  </summary>
                  <ul className="mt-3 pl-3 text-sm text-gray-700 space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- LOGIN HERO ---- */}
      <div className="hero min-h-[70vh] bg-base-200 mt-10 w-full px-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-black">Login now!</h1>
            <p className="py-4 text-gray-700">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label text-black">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                />
                <label className="label text-black mt-2">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-amber-600">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4 w-full">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      {/* ---- BLOG SECTION ---- */}
      <div className="w-full mt-10">
        <BlogHome />
      </div>
    </div>
  );
}
