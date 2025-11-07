



'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../(mainlayout)/REDUX/SLICE/productSlice';


const ProductItem = ({ item }) => { 
  const dispatch = useDispatch();
  
  if (!item) return null; // ⛔ Prevent rendering if item is undefined

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name || item.title} added to cart`);
  };

 

  return (
    <div
      onClick={handleAddToCart}
      className="cursor-pointer p-4 border hover:scale-105 transition rounded"
    >
      <img
        src={item.image || item.previewImage || '/fallback.jpg'} // ✅ Fallback image
        alt={item.name || item.title || 'Product'}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{item.name || item.title || 'Untitled'}</h3>
      <p className="text-sm text-gray-600">{item.price || '—'}</p>
    </div>
  );
};

export default ProductItem;
