"use client";
import Image from 'next/image'
export default function Avatar({ src }) {
  return (
    <Image
      src={src }
      alt="User Avatar"
      className="rounded-full w-16 h-16 object-cover"
      width={100}
      height={100}
    />
  );
}
