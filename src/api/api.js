import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://64a6b18f096b3f0fcc80543b.mockapi.io',
    }),
    tagTypes: ['cars'],

    endpoints: builder => ({
        getAllCars: builder.query({
            query: () => ({
                method: 'GET',
                url: '/advert',
            }),
            providesTags: ['allCars'],
        }),

        getCarsByPages: builder.query({
            query: ({ queryPage, queryLimit }) => ({
                method: 'GET',
                url: `/advert?page=${queryPage}&limit=${queryLimit}`,
            }),
            providesTags: ['carsByPages'],
        }),
    }),
});

export const { useGetAllCarsQuery, useGetCarsByPagesQuery } = api;
