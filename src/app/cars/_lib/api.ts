type PagingInfo = {
  _start?: number;
  _limit?: number;
};

export type Post = {
  userId: number;
  id: number;
  name: string;
  username: string;
  email: string;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getPostsCount(): Promise<number> {
  // https://jsonplaceholder.typicode.com/posts/?_start=5&_limit=8
  const data = await fetch(`${process.env.BASE_API_URL}/users/?_limit=1`, {
    method: "HEAD",
  });
  let count: string | number = data.headers.get("x-total-count") || "1";
  count = parseInt(count, 10);
  return count;
}

async function getPosts({
  _start = 0,
  _limit = PAGE_SIZE,
}: PagingInfo): Promise<Post[]> {
  const data = await fetch(
    `${process.env.BASE_API_URL}/users/?_start=${_start}&_limit=${_limit}`
  );
  return data.json();
}

export { getPosts, getPostsCount };
