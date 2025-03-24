import { FaClock, FaInfoCircle } from "react-icons/fa";
import Button from "../common/Button";
import { useContext } from "react";
import { RemContext, RemContextType } from "../../types/context";


const SkipPopUp = () => {
     const {selectedSkip, setSelectedSkip} = useContext(RemContext) as RemContextType
  return (
    <>
       {selectedSkip && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 bg-gradient-to-t from-black/10 to-transparent shadow-2xl p-6 rounded-xl w-96 text-center z-50 animate-fade-in">
          <h3 className="xl:text-3xl lg:text-2xl text-xl font-bold text-gray-800 dark:text-white tracking-wide text-center">
           {selectedSkip.size} Yard Skip
         </h3>
        
         <div className="h-[1px] w-full dark:bg-gray-700 bg-gray-500 my-4 opacity-50"></div>
     
         <div className="space-y-3 text-gray-300">
           <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
                <FaInfoCircle className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 dark:text-white font-bold text-base">Price:</span>
             </span>
             <span className="xl:text-xl text-lg font-bold dark:text-green-400 text-primary">£{selectedSkip.price} /week</span>
           </div>
     
           <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FaClock className="h-4 w-4 text-gray-400" />  
            <span className="text-gray-900 dark:text-white font-bold text-base">Hire Period:</span>
             </span>
             <span className="xl:text-xl text-lg font-bold dark:text-blue-400 text-blue-500">{selectedSkip.period} days</span>
           </div>
         </div>
     
         <div className="mt-6 flex justify-between gap-10">
            <Button
              type="button"
              className="w-full before:bg-gray-700/80 h-11"
              onClick={() => setSelectedSkip(null)}
              children={<span className="relative md:text-base text-sm font-semibold text-white">Cancel</span>}
            />

            <Button
              type="submit"
               className="w-full text-white  before:bg-primary h-11"
              onClick={() => console.log(`Continue with Skip ID: ${selectedSkip.id}`)}
              children={<span className="relative md:text-base text-sm font-semibold text-white">Continue</span>}
            />
         </div>
        </div>
      )}
       </>
  )
}

export default SkipPopUp