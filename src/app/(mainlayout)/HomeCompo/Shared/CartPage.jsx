



'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../REDUX/SLICE/productSlice';
import Link from 'next/link';

export default function CartPage() {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price?.replace('$', '') || 0);
    return sum + price * item.quantity;
  }, 0);

  return (
    <section className="w-full py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Price: {item.price}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium">
                Total Items: <span className="font-bold">{totalItems}</span>
              </p>
              <p className="text-lg font-medium">
                Total Price: <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </p>

              <Link href="/checkout">
                <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
                  Continue to Shipping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
