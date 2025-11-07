


'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../(mainlayout)/REDUX/SLICE/productSlice';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useGetProductsQuery } from '../../../../api/upload/dataApi';

export default function Constant() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart`);
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-yellow-100 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-yellow-900 mb-10"
        >
          🎉 BIG SALE TODAY
        </motion.h2>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.items.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-yellow-800">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.tags.join(', ')}</p>
                  <p className="text-xl font-bold text-pink-600 mt-2">{item.price}</p>
                  <button
                    onClick={() => handleAdd(item)}
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
