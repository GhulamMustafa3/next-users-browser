"use client";

import Avatar from "./Avatar";


export default function UserTable({ user }) {
  return (
    <table className="border-collapse border w-full text-left">
      <tbody>
        <tr>
          <td className="border p-2">Avatar</td>
          <td className="border p-2">
            {/* <img src='https://avatar.iran.liara.run/public/34' className="rounded-full w-16 h-16"/> */}
            <Avatar src={user.avatar} />
          </td>
        </tr>
        <tr>
          <td className="border p-2">ID</td>
          <td className="border p-2">{user.id}</td>
        </tr>
        <tr>
          <td className="border p-2">Name</td>
          <td className="border p-2">
            {user.first_name} {user.name}
          </td>
        </tr>
        <tr>
          <td className="border p-2">Email</td>
          <td className="border p-2">{user.email}</td>
        </tr>
      </tbody>
    </table>
  );
}
