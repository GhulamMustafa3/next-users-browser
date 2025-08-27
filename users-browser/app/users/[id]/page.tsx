"use client";
import { useParams } from "next/navigation";
import UserTable from "../../../components/UserTable";


export default function UserPage() {
  const params = useParams();
  const userId = Number(params.id);

  const usersList = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", avatar: 'https://avatar.iran.liara.run/public/34' },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", avatar: 'https://avatar.iran.liara.run/public/45' },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net", avatar: 'https://avatar.iran.liara.run/public/27' },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org", avatar: 'https://avatar.iran.liara.run/public/1' },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca", avatar: 'https://avatar.iran.liara.run/public/22' },
  ];

  

  
    const user = (usersList.find(u => u.id === userId));
    


  if (!user) return <p className="p-6 text-red-500">User not found!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <UserTable user={user} />
    </div>
  );
}
