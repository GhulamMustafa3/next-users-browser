"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Users Browser</h1>
      <p className="mt-4">Explore users with client-side rendering.</p>
      <Link href="/users" className="text-blue-500 underline mt-4 block">
        Go to Users 
      </Link>
    </div>
  );
}
