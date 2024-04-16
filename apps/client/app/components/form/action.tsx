"use server";

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 60000);

const fetcher = async (url: string, port: number, keyword: string) => {
  const res = await fetch(`${url}:${port}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword: keyword,
    }),
    signal: controller.signal,
  });
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res;
};

async function generate(keyword: string) {
  try {
    console.log(`${process.env.SERVER_IP_ADDR}:${process.env.SERVER_PORT}`);

    const res: Response = await fetcher("http://13.209.5.237", 8000, keyword);
    const data: string = await res.json();
    console.log(data);

    return { data };
  } catch (error) {
    console.log(error);
    return { data: null };
  } finally {
    clearTimeout(timeout);
  }
}

export { fetcher, generate };
