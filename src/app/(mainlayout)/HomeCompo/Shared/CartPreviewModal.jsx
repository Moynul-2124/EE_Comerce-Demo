

'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCartPreview } from '../../REDUX/SLICE/productSlice';
import toast from 'react-hot-toast';

export default function CartPreviewModal() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.cartPreview);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleConfirm = () => {
    dispatch(addToCart({ ...product, quantity }));
    dispatch(clearCartPreview());
    toast.success(`${product.title} added to cart (x${quantity})`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={() => dispatch(clearCartPreview())}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ✕
        </button>
        <img src={product.previewImage} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.excerpt}</p>

        <div className="flex items-center gap-2 mt-4">
          <label className="text-sm font-medium">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 border rounded"
          />
        </div>

        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
