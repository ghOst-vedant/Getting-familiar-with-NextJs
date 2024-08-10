import UserPosts from "@/components/UserPosts";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "lucide-react";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";
type params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: params): Promise<Metadata> {
  const userData: Promise<User> = getUser(id);
  const user = await userData;
  if (!user.name) {
    return {
      title: "User not found",
    };
  }
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}
export default async function page({ params: { id } }: params) {
  const userData: Promise<User> = getUser(id);
  const postsData: Promise<Post[]> = getUserPosts(id);
  const user = await userData;
  if (!user.name) notFound();
  return (
    <div>
      <h1 className="text-2xl">{user.name}</h1>
      <br />
      <Suspense
        fallback={
          <div className="m-8">
            <Loader className="animate-spin" size={30} />
          </div>
        }
      >
        <UserPosts postsData={postsData} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => {
    userId: user.id.toString();
  });
}
