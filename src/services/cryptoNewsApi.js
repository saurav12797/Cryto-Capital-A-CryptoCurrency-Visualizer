import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "ffb517d016msh9987c6242138632p199678jsn2b611cd0af5f",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
