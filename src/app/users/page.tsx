import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users Page",
};

const page = async () => {
  const usersData: User[] = await getAllUsers();

  return (
    <div className=" flex flex-col gap-4">
      {usersData.map((user) => {
        return (
          <li key={user?.id} className="list-none">
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default page;
