async function getUserPosts(userId: string): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    // throw new Error("Enable to fetch user");
    undefined;
  }
  return res.json();
}

export default getUserPosts;
