import { TbFidgetSpinner } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";


const LoadingError = ({ loading, error }: {loading:boolean, error: string}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <TbFidgetSpinner className="animate-spin text-primary text-5xl mx-auto" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2">
        <BiSolidError className="text-primary text-4xl" />
        <p className="font-bold xl:text-lg lg:text-base text-sm text-gray-900 dark:text-white">
          Error loading data...
        </p>
      </div>
    );
  }

  return null;
};

export default LoadingError;
