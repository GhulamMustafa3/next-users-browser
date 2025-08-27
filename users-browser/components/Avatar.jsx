"use client";

export default function Avatar({ src }) {
  return (
    <img
      src={src || "https://avatar.iran.liara.run/public/34"}
      alt="User Avatar"
      className="rounded-full w-16 h-16 object-cover"
    />
  );
}
