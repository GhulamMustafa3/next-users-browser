
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserSelect from "../../components/UserSelect";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};
export default function UsersPage() {
  const usersList:User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      avatar: 'https://avatar.iran.liara.run/public/34'
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      avatar: 'https://avatar.iran.liara.run/public/45'
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      avatar: 'https://avatar.iran.liara.run/public/27'
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      avatar: 'https://avatar.iran.liara.run/public/1'
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      avatar: 'https://avatar.iran.liara.run/public/22'
    },
  ];
 const router = useRouter();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
       <UserSelect
        user={usersList}
        onSelect={(selectedUser: { id: any; }) => {
          if (selectedUser) {
            router.push(`/users/${selectedUser.id}`);
          }
        }}
      />

    </div>
  );
}
