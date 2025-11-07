


'use client'
import React, { useState, useMemo } from 'react'
import Title from '@/app/(mainlayout)/Componenets/Fixed/Title';
import AddCampaign from '../SharedCompo/AddCampaign';
import { useGetCategoriesQuery, useGetBannersQuery, useGetShopproductsQuery } from '../../../../api/upload/dataApi';

const ShopsMain = () => {
    const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
    const { data: banners, isLoading: bannerLoading } = useGetBannersQuery();
    const { data: products, isLoading: prodLoading } = useGetShopproductsQuery();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortType, setSortType] = useState('alphabetical');
    const [priceRange, setPriceRange] = useState(100);

    // ✅ Filter + Sort
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        let filtered = selectedCategory
            ? products.filter(p => p.category === selectedCategory)
            : products;

        filtered = filtered.filter(p => p.price <= priceRange);

        if (sortType === 'alphabetical') {
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === 'priceLow') {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortType === 'priceHigh') {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }
        return filtered;
    }, [products, selectedCategory, sortType, priceRange]);

    // ✅ fallback image
    const getImage = (url) => {
        return url && url.startsWith('http')
            ? url
            : 'https://cdn-icons-png.flaticon.com/512/3081/3081873.png';
    };

    return (
        <div className='flex flex-col md:flex-row container mx-auto py-10 gap-10'>

            {/* --- Sidebar --- */}
            <aside className='md:w-[30%] w-full border rounded-lg p-6 bg-base-200 space-y-6'>

                {/* Categories */}
                <div>
                    <Title gud="Categories" />
                    {catLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className='flex flex-wrap md:flex-col gap-3 justify-center md:justify-start items-center'>
                            <li
                                onClick={() => setSelectedCategory(null)}
                                className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all ${!selectedCategory ? 'bg-orange-500 text-white' : 'hover:bg-orange-300'
                                    }`}
                            >
                                All
                            </li>
                            {categories?.map(cat => (
                                <li
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.title)}
                                    className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.title ? 'bg-orange-500 text-white' : 'hover:bg-orange-300'
                                        }`}
                                >
                                    {cat.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Price Filter */}
                <div>
                    <Title gud="Price" />
                    <input
                        type="range"
                        min={0}
                        max="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="range range-info"
                    />
                    <h1 className='text-center pt-2 text-sm md:text-base'>
                        Price: <span className='font-bold'>$0 - ${priceRange}</span>
                    </h1>
                </div>

                {/* Tags Section */}
                <div>
                    <Title gud="Tags" />
                    {bannerLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className='flex flex-wrap gap-2 justify-center'>
                            {banners?.map(tag => (
                                <li key={tag.id}>
                                    <button
                                        className="btn btn-xs md:btn-sm btn-warning rounded-full"
                                        onClick={() => setSelectedCategory(tag.title)}
                                    >
                                        {tag.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Sorting */}
                <div>
                    <Title gud="Featured Sorting" />
                    <select
                        className='select select-bordered w-full mt-2'
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="alphabetical">Alphabetical (A-Z)</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                    </select>
                </div>

                {/* AddCampaign Section */}
                <div className='mt-6'>
                    <AddCampaign />
                </div>
            </aside>

            {/* --- Products Section --- */}
            <section className='md:w-[70%] w-full'>
                {prodLoading ? (
                    <p className='text-center py-20'>Loading products...</p>
                ) : filteredProducts.length > 0 ? (
                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <div className="relative card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <figure className="px-6 pt-6">
                                        <img
                                            src={getImage(product.image)}
                                            alt={product.title}
                                            className="rounded-xl object-cover h-48 w-full transition-transform duration-300 group-hover:scale-105"
                                            onError={(e) => (e.target.src = 'https://www.shutterstock.com/shutterstock/photos/1702060108/display_1500/stock-photo-cooking-organic-bread-at-home-due-to-quarantine-breads-in-slices-while-baking-in-the-oven-and-1702060108.jpg')}
                                        />
                                    </figure>   
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-lg font-semibold">{product.title}</h2>
                                        <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>

                                    {/* Hover overlay actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center gap-3 rounded-xl">
                                        <button className="btn btn-sm btn-warning w-32">Add to Cart 🛒</button>
                                        <button className="btn btn-sm btn-outline text-white border-white w-32">
                                            View Details 👀
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-center py-10 text-gray-500'>No products found in this category or price range.</p>
                )}
            </section>
        </div>
    );
};

export default ShopsMain;
