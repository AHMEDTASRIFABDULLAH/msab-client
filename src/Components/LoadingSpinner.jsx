import { AiOutlineLoading3Quarters } from "react-icons/ai";
const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full min-h-[calc(100vh-305px)]">
        <div
          aria-label="Loading..."
          role="status"
          className="flex items-center space-x-2"
        >
          <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
