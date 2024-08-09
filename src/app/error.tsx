"use client";
interface errorProps {
  error: Error;
  reset(): void;
}
const ERROR = ({ error, reset }: errorProps) => {
  return (
    <div className="flex  justify-center items-center h-screen">
      <h1 className=" text-3xl">Looks like something crashed 🥲</h1>
      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default ERROR;
