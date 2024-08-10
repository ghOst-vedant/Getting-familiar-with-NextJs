"use client";
import { useParams } from "next/navigation";

function NotFound() {
  const params = useParams();
  const { id } = params;
  return (
    <div className="text-xl">
      User with id: <span className="text-red-500 font-semibold"> {id}</span>{" "}
      not found
    </div>
  );
}

export default NotFound;
