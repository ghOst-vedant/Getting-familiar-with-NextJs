export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main>
      <p className=" text-3xl text-blue-500 font-semibold h-screen flex justify-center items-center">
        Home
      </p>
    </main>
  );
}
