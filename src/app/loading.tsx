import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <main className="flex h-full items-center justify-center">
      <Loader className="animate-spin text-primary" size={120} />
    </main>
  );
};

export default Loading;
