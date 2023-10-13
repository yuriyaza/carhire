import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://64a6b18f096b3f0fcc80543b.mockapi.io',
    }),

    endpoints: builder => ({
        getAllCars: builder.query({
            query: () => ({
                method: 'GET',
                url: '/advert',
            }),
        }),

        getPaginatedCars: builder.query({
            query: ({ queryPage, queryLimit }) => ({
                method: 'GET',
                url: `/advert?page=${queryPage}&limit=${queryLimit}`,
            }),
            // Set the one common cache entry (argument always maps to one string)
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge (append) incoming data to the common cache entry
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            // Refresh the interface on the first page and on the page change
            forceRefetch({ currentArg, previousArg }) {
                if (!previousArg || previousArg.queryPage !== currentArg.queryPage) {
                    return true;
                }
            },
        }),
    }),
});

export const { useGetAllCarsQuery, useGetPaginatedCarsQuery } = api;
