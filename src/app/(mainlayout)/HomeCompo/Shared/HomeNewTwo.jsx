






"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    addToWishlist,
    setQuickView,
    setCartPreview,
    clearCartPreview,
} from "../../REDUX/SLICE/productSlice";
import { useGetBlogQuery } from "../../../../api/upload/dataApi";
import toast from "react-hot-toast";

export default function HomeNewTwo() {
    const dispatch = useDispatch();
    const cartPreview = useSelector((state) => state.product.cartPreview);
    const [quantity, setQuantity] = useState(1);

    const { data, isLoading, isError } = useGetBlogQuery();

    const handleCartPreview = (item) => {
        dispatch(setCartPreview(item));
        setQuantity(1);
    };

    const handleConfirmAddToCart = () => {
        dispatch(addToCart({ ...cartPreview, quantity }));
        dispatch(clearCartPreview());
        toast.success(`${cartPreview.name} added to cart (x${quantity})`);
    };

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
        toast.success(`${item.name} added to wishlist`);
    };

    const handleQuickView = (item) => {
        dispatch(setQuickView(item));
        toast(`${item.name} previewing`, { icon: "👁️" });
    };

    return (
        <section className="w-full py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">
                    {data?.sectionTitle || "Featured Products"}
                </h2>

                {isLoading ? (
                    <p className="text-center text-gray-500">Loading products...</p>
                ) : isError ? (
                    <p className="text-center text-red-500">Failed to load products.</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">

                        {data?.posts?.map((product) => (
                            <li key={product.id} className="flex justify-center">
                                <div className="relative group w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Stock Labels */}
                                    {product.stock === "New Arrival" && (
                                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
                                            New
                                        </span>
                                    )}
                                    {product.stock === "Limited" && (
                                        <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded z-10">
                                            Limited
                                        </span>
                                    )}

                                    {/* Image + Hover Actions */}
                                    <div className="relative cursor-pointer">
                                        <img
                                            src={product.previewImage}
                                            alt={product.title}
                                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => handleCartPreview(product)}
                                                className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition"
                                            >
                                                🛒
                                            </button>
                                            <button
                                                onClick={() => handleAddToWishlist(product)}
                                                className="bg-white text-black p-2 rounded-full hover:bg-pink-400 transition"
                                            >
                                                ❤️
                                            </button>
                                            <button
                                                onClick={() => handleQuickView(product)}
                                                className="bg-white text-black p-2 rounded-full hover:bg-blue-400 transition"
                                            >
                                                👁️
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-1">{product.price}</p>
                                        <p className="text-xs text-gray-500 mb-2">{product.tags}</p>
                                        <div className="flex justify-center gap-2 flex-wrap mt-2">
                                            
                                                <span
                                                    key={product.tags}
                                                    className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                                                >
                                                    {product.tags}
                                                </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* 🛒 Cart Preview Modal */}
            {cartPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                        <button
                            onClick={() => dispatch(clearCartPreview())}
                            className="absolute top-2 right-2 text-xl font-bold"
                        >
                            ✕
                        </button>
                        <img
                            src={cartPreview.previewImage}
                            alt={cartPreview.title}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{cartPreview.title}</h2>
                        <p className="text-sm text-gray-600 mb-2">{cartPreview.price}</p>

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

                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={() => dispatch(clearCartPreview())}
                                className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
                            >
                                Continue Shopping
                            </button>
                            <button
                                onClick={handleConfirmAddToCart}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                            >
                                Add & Proceed
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
