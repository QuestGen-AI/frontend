"use server";

import { Data } from "../../types/data";

const fetcher = async (url: string, keyword: string) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword: keyword,
    }),
  });
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res;
};

async function generate(keyword: string) {
  try {
    const res: Response = await fetcher("http://16.170.208.227", keyword);
    const data: Data = await res.json();
    return { data };
  } catch (error) {
    return { data: null };
  }
}

export { fetcher, generate };
