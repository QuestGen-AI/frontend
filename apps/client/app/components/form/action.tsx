"use server";

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
    const res: Response = await fetcher("http://13.209.5.237:8000", keyword);
    const data: string = await res.json();
    console.log(data);

    return { data };
  } catch (error) {
    console.log(error);
    return { data: null };
  }
}

export { fetcher, generate };
