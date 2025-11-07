



"use client";
import { useGetHeroQuery, useGetHomeInfoQuery } from '../../../../api/upload/dataApi';
import Link from 'next/link';
const HomeHero = () => {
  const { data: users, isLoading: loadingUsers } = useGetHomeInfoQuery();
  const { data: posts, isLoading: loadingPosts } = useGetHeroQuery();

  if (loadingUsers || loadingPosts) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="w-full bg-[#FBF3EC] px-4 sm:px-8 ">
      <div className="max-w-7xl rounded-md mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-snug">
            {posts?.headline || "Cakes For Parties And Family Gatherings"}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
            {posts?.subtext || "We select and bring you the best quality, rest assured and experience."}
          </p>
          <a
            href={posts?.cta?.link || "#"}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            <Link href="/shops">
              <h1 className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300">
                {posts?.cta?.text || "Shop Now"}
              </h1>
            </Link>
          </a>
        </div>  

        {/* Right Image */}
        <div className="md:w-1/2 w-full px-4 sm:px-0 md:translate-x-8">
          <img
            src={posts?.image}
            alt="Hero"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px]  shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
