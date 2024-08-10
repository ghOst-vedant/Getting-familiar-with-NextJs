async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    // throw new Error("Enable to fetch user");
    undefined;
  }
  return res.json();
}

export default getUser;
