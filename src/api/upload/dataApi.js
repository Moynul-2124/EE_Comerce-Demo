






import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({  
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getHomeInfo: builder.query({ query: () => 'homeInfo' }),
    getHero: builder.query({ query: () => 'hero' }),
    getProducts: builder.query({ query: () => 'products' }),

    getBlog: builder.query({ query: () => 'blog' }),
    getFooter: builder.query({ query: () => 'footer' }),
    getStore: builder.query({ query: () => 'store' }),
    getHeader: builder.query({ query: () => 'header' }),
    getCategories: builder.query({ query: () => 'categories' }),
    getBanners: builder.query({ query: () => 'banners' }),
    getShopproducts: builder.query({ query: () => 'shopproducts' }),
    getNewsletter: builder.query({ query: () => 'newsletter' }),
    getShopfooter: builder.query({ query: () => 'shopfooter' }),

  }),
});
export const {
  useGetHomeInfoQuery,
  useGetHeroQuery,
  useGetProductsQuery,
  useGetFooterQuery,
  useGetBlogQuery,
  useGetStoreQuery,
  useGetHeaderQuery,
  useGetCategoriesQuery,
  useGetBannersQuery,
  useGetShopproductsQuery,
  useGetNewsletterQuery,

  useGetShopfooterQuery,

} = dataApi;
