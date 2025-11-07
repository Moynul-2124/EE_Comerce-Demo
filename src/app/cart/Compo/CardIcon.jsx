

'use client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import CartPreviewModal from './CartPreviewModal';

const CardIcon = () => {
  const cart = useSelector(state => state.product.cart);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="relative cursor-pointer p-2">
        🛒
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
            {cart.length}
          </span>
        )}
      </div>
      {open && <CartPreviewModal items={cart} onClose={() => setOpen(false)} />}
    </>
  );
};

export default CardIcon;
