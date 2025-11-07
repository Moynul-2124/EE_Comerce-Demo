


'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../(mainlayout)/REDUX/SLICE/productSlice';
import { useGetProductsQuery, useGetBlogQuery } from '../../../api/upload/dataApi';

const CartPage = () => {
  const cartItems = useSelector(state => state.product.cart);
  const dispatch = useDispatch();

  const { data: productData, isLoading: loadingProducts } = useGetProductsQuery();
  const { data: blogData, isLoading: loadingBlogs } = useGetBlogQuery();

  const isEmpty = Array.isArray(cartItems) && cartItems.length === 0;

  return (
    <div className="mt-10 px-4 space-y-10">
      {/* 🛒 Cart Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        {isEmpty ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🍰 Featured Products */}
      <div>
        <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
        {loadingProducts ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productData?.items.slice(0, 4).map(product => (
              <div key={product.id} className="flex gap-4 border p-4 rounded">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.tags.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 📝 Blog Highlights */}
      <div>
        <h2 className="text-2xl font-bold mb-4">From the Oven</h2>
        {loadingBlogs ? (
          <p className="text-gray-500">Loading blog posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogData?.posts.slice(0, 4).map(post => (
              <div key={post.id} className="flex gap-4 border p-4 rounded">
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
    </div>
  );
};

export default CartPage;
