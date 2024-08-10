import { Loader } from "lucide-react";
const loading = async () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-3xl">
        <Loader className="animate-spin" size={40} />
      </h1>
    </div>
  );
};

export default loading;
