



'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import CartPreviewModal from '../cart/Compo/CartPreviewModal';
import CartPage from '../cart/Compo/CartPage';
import ProductItem from '../cart/Compo/ProductItem';
import CardIcon from '../cart/Compo/CardIcon';
import CardModal from './Compo/CardModal';
import CartToast from './Compo/CartToast';

const Page = () => {
  const [showCardModal, setShowCardModal] = useState(false);

  // ✅ Get cart items from Redux
  const cartItems = useSelector((state) => state.product.cart);

  return (
    <div className="p-6 bg-black text-white">
        
      
      {/* Floating Cart Icon */}
      <CardIcon />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            🛒 No products added yet.
          </p>
        )}
      </div>

      {/* Card Modal */}
      {showCardModal && <CardModal onClose={() => setShowCardModal(false)} />}

     

      {/* Full Cart Page */}
      <CartPage />
    </div>
  );
};

export default Page;
