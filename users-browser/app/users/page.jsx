"use client";
import { useEffect, useState } from "react";
import UserSelect from "../../components/UserSelect";
import UserTable from "../../components/UserTable";

export default function UsersPage() {
  const usersList = [
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

  const [users] = useState(usersList);
  const [selected, setSelected] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);









  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UserSelect user={users}
        onSelect={setSelected}
        onFocusChange={setDropdownOpen}

      />
      {selectedUser && (
        <div className={dropdownOpen ? "mt-42" : "mt-3"}>
          <UserTable user={selected} />
        </div>
      )}

    </div>
  );
}
