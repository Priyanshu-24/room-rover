import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="w-full h-40 flex justify-center items-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </div>
  );
};

export default Loading;
