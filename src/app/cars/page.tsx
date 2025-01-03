import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getPostsCount } from "./_lib/api";
import type { Post } from "./_lib/api";
import Image from "next/image";

type BlogPageProps = {
  searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 3;

export const metadata: Metadata = {
  title: "Cars",
};

function processPost(post: Post) {
  const { id, name, username, email } = post;
  return (
    <li key={id} className="mb-4 flex">
      <Link
        href={`/cars/${id}`}
        className="block p-12 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-orange-50 transition-colors duration-200"
      >
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-gray-900 text-center max-w-sm max-h-20">
          Model: {name}
        </h2>
        <div className="flex">
          <Image
            src="/car.jpg"
            alt="Auto"
            width={250}
            height={100}
            className="ml-12 flex-start"
          ></Image>
          <div className="flex-end invisible 2xl:visible">
            <p className="ml-12 text-black m-6">{username}</p>
            <p className="ml-12 text-black m-6">Gorivo</p>
            <p className="ml-12 text-black m-6">Broj osoba</p>
            <p className="ml-12 text-green-500 m-12">{email}</p>
          </div>
        </div>

        <p className="font-bold text-center text-orange-500 mt-6">
          Book now
          <span className="mb-2 text-m text-black"> Car #{id}</span>
        </p>
      </Link>
    </li>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const postsCount = await getPostsCount();
  const pagesCount = Math.ceil(postsCount / PAGE_SIZE);
  // Ensure the page number is a positive integer.
  const currentPage = Math.min(
    /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
    pagesCount
  );
  const _start = (currentPage - 1) * PAGE_SIZE;
  const _limit = PAGE_SIZE;

  const posts = await getPosts({ _start, _limit });
  return (
    <main className="flex min-h-screen max-w m-auto flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight mb-10 text-orange-500 text-outline">
        Cars
      </h1>
      <ul className="gap-10 md:flex">{posts.map(processPost)}</ul>
    </main>
  );
}
