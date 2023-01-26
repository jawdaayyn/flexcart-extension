import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiEndpoint}/` }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (params) => ({
        url: `/carts/add`,
        method: "PUT",
        body: {
          brand: params.brand,
          description: params.description,
          name: params.name,
          image: params.image,
          price: params.price,
          url: params.url,
        },
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }),
    }),
  }),
});
