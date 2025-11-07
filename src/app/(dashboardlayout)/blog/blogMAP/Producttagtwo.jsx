

"use client"
import Link from 'next/link';
import React from 'react';

const Producttagtwo = ({ fingeringkoro }) => {
    return (
        <div>
            <div>

                <div className="card bg-base-100 w-86 shadow-sm">
                    <figure>
                        <img className="w-[295px] h-[193px] object-cover rounded-md"
                            src={fingeringkoro.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {fingeringkoro.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <Link href={`/blog/${fingeringkoro.ratings}`}><div className="badge badge-outline">Fashion</div></Link>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>









            </div>
        </div>
    );
};

export default Producttagtwo;