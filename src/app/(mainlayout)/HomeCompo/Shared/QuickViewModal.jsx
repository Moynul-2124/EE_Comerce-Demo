

'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearQuickView } from '../../REDUX/SLICE/productSlice';

export default function QuickViewModal() {
  const quickView = useSelector((state) => state.product.quickView);
  const dispatch = useDispatch();

  if (!quickView) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={() => dispatch(clearQuickView())}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ✕
        </button>
        <img src={quickView.previewImage} alt={quickView.title} className="w-full h-48 object-cover rounded mb-4" />
        <h2 className="text-xl font-bold mb-2">{quickView.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{quickView.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {quickView.tags?.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
