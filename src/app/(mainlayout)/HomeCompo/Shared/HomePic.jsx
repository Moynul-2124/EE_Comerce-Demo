






'use client'
import React from 'react'
import { useGetBlogQuery } from '../../../../api/upload/dataApi'

export default function HomePic() {
    const { data, isLoading } = useGetBlogQuery()

    return (
        <div>
            {isLoading ? <p>Loading...</p> : (
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {data?.posts.slice(0, 4).map((project, index) => (
                        <div key={project.id} className="flex flex-col">
                            {/* 🖼️ Image Block */}
                            <div
                                className="h-[250px] sm:h-[350px] bg-cover bg-center animate-slide-up"
                                style={{
                                    backgroundImage: `url('${project.previewImage}')`,
                                    animationDelay: `${0.3 + index * 0.3}s`
                                }}
                            />

                            {/* 🧾 Bold Card Below */}
                            <div
                                className="bg-yellow-800 text-white py-6 px-4 text-center animate-slide-up"
                                style={{ animationDelay: `${0.5 + index * 0.3}s` }}
                            >
                                <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
                                <p className="text-sm sm:text-md mt-2">{project.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
