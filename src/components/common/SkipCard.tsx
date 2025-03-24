import { FaInfoCircle } from "react-icons/fa";
import { DetailsType } from "../../types/data";
import Button from "./Button";
import { SkipImg } from "../../assets";


const SkipCard = ({size,forbidden, allows_heavy_waste, hire_period_days, price_before_vat, onSelect }: DetailsType) => {
 
  const handleSkipSelection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!forbidden && !allows_heavy_waste) {
      e.stopPropagation();
      console.log("Unavailable Skip - Selection Blocked");
      return;
    }
    onSelect && onSelect();
  };



  return (
    <div
      onClick={handleSkipSelection}
      className={`relative bg-white dark:bg-gray-900 shadow-2xl xl:rounded-3xl rounded-2xl overflow-hidden ${!forbidden && !allows_heavy_waste ? "opacity-60 cursor-not-allowed select-none" : "cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-100 hover:-translate-y-2 hover:border hover:border-green-400 hover:dark:border-green-700"}`}
    >
      <div
        className="xl:h-64 h-56 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${SkipImg})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/40 to-transparent">
          <h2 className="text-white xl:text-4xl lg:text-3xl text-2xl font-extrabold tracking-tight text-center mb-2 drop-shadow-xl">
            {size} Yard Skip
          </h2>
          
          {price_before_vat > 420 && (
            <div className="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-40 rounded-lg py-1 px-3 z-10">
              <FaInfoCircle className="h-4 w-4 text-gray-600 dark:text-yellow-400" />
              <p className="font-bold text-yellow-400 lg:text-sm text-xs opacity-90 dark:text-yellow-300">Private Property Only</p>
            </div>
          )}

          {!allows_heavy_waste && (
            <div className="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-40 rounded-lg py-1 px-3 mt-1 z-10">
              <FaInfoCircle className="h-4 w-4 text-gray-600 dark:text-rose-400" />
              <p className="font-bold text-rose-600 lg:text-sm text-xs opacity-90 dark:text-rose-400">Not Suitable for Heavy Waste</p>
            </div>
          )}
        </div>
      </div>

   
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex flex-col">
            <p className="xl:text-4xl lg:text-3xl text-2xl font-extrabold text-primary mb-2">
              £{price_before_vat}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Per Week</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="xl:text-xl text-lg font-semibold text-gray-900 dark:text-gray-200">{hire_period_days} days</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Hire Period</p>
          </div>
        </div>

      
        <Button
          type="button"
          className={`min-w-full h-14 text-lg font-semibold tracking-wider mt-6 ${
            !forbidden && !allows_heavy_waste
              ? "before:bg-green-700 cursor-not-allowed pointer-events-none"
              : "hover:shadow-2xl before:bg-primary"
          }`}
          onClick={() => {}}
          children={<span className={`${forbidden || !allows_heavy_waste && "text-gray-600"} relative md:text-lg text-base font-semibold text-white`}>{forbidden || !allows_heavy_waste ? "Unavailable" : "Select this Skip"}</span>}
        />
       
    
      </div>
    </div>
      );
    };
    
    export default SkipCard;

