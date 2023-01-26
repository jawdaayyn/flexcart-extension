import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiEndpoint = process.env.REACT_APP_PYTHONAPI_ENDPOINT;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiEndpoint}/` }),
  endpoints: (builder) => ({
    Scrap: builder.mutation({
      query: (params) => ({
        url: `/scrap`,
        method: "POST",
        body: {
          url: params.url,
        },
      }),
    }),
  }),
});
