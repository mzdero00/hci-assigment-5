import Link from "next/link";
import type { Post } from "../_lib/api";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Car",
};

type BlogPostProps = {
  params: { id: string };
};

async function getPost(id: string): Promise<Post> {
  const data = await fetch(`${process.env.BASE_API_URL}/users/${id}`);
  return data.json();
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.id);
  const { id, name, username, email } = post;
  if (!id) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <Link
          href="/cars"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all cars
        </Link>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center mb-6">
          Model: {name}
        </h2>
        <div className="flex">
          <Image
            src="/car.jpg"
            alt="Auto"
            width={200}
            height={200}
            className="ml-12"
          ></Image>
          <div>
            <p className="ml-12 text-black m-6">{username}</p>
            <p className="ml-12 text-black m-6">Mjenjač</p>
            <p className="ml-12 text-black m-6">Broj osoba</p>
            <p className="ml-12 text-green-500 m-12">{email}</p>
          </div>
        </div>

        <p className="font-bold text-center text-orange-500 mt-6">
          Book now
          <span className="mb-2 text-m text-black"> Car #{id}</span>
        </p>
      </article>
    </main>
  );
}
