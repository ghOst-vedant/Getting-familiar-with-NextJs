type promiseProp = {
  postsData: Promise<Post[]>;
};
export default async function UserPosts({ postsData }: promiseProp) {
  const posts = await postsData;

  const content = posts?.map((post) => {
    return (
      <article key={post.id} className="mt-4">
        <h2 className=" text-2xl font-semibold">{post.title}</h2>
        <p>Description: {post.body}</p>
      </article>
    );
  });
  return <section>{content}</section>;
}
