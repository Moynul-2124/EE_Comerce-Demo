



'use client';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useGetProductsQuery } from '../../../api/upload/dataApi';
import { useGetBlogQuery } from '../../../api/upload/dataApi';

const CardModal = ({ onClose }) => {
  const selectedItems = useSelector(state => state.product.cart);
  const { data: productData, isLoading: loadingProducts } = useGetProductsQuery();
  const { data: blogData, isLoading: loadingBlogs } = useGetBlogQuery();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl overflow-y-auto max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500 text-xl">✖</button>
        <h2 className="text-xl font-bold mb-4">Selected Items</h2>

        {/* 🛒 Redux Cart Items */}
        {selectedItems.length === 0 ? (
          <p className="text-gray-500 mb-6">No items selected.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {selectedItems.map(item => (
              <div key={item.id} className="border p-4 rounded flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description || item.tags?.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 🍰 Featured Products */}
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        {loadingProducts ? (
          <p className="text-gray-500 mb-6">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {productData?.items.slice(0, 4).map(product => (
              <div key={product.id} className="border p-4 rounded flex gap-4 items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.tags.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 📝 Blog Highlights */}
        <h2 className="text-xl font-bold mb-4">From the Oven</h2>
        {loadingBlogs ? (
          <p className="text-gray-500">Loading blog posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogData?.posts.slice(0, 4).map(post => (
              <div key={post.id} className="border p-4 rounded flex gap-4 items-center">
                <img src={post.previewImage} alt={post.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.author}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CardModal;
