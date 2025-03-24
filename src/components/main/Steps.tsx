import { SidebarData } from "../../data/steps"
import { SidebarDataType } from "../../types/sidebar"
import { IoCheckmark } from "react-icons/io5"
import { HiOutlineArrowLongRight } from "react-icons/hi2"


const Steps = () => {
  return (
    <aside className={`relative w-full xl:col-span-1 flex xl:flex-col items-center justify-start gap-5 p-2 xl:overflow-visible overflow-x-auto scrollbar-hide lg:rounded-3xl rounded-xl border border-gray-400 dark:border-gray-600 overflow-hidden`}>
        {SidebarData.map(({id, status, icon, name}: SidebarDataType, index) => (
            <div key={id} className= {`xl:shadow-sideButton xl:backdrop-blur-lg  border relative group flex items-start justify-start p-4 rounded-xl w-full ${status === "completed" ? "border-primary dark:border-green-800 dark:text-green-400 text-green-500 hover:text-primary dark:hover:text-primary cursor-pointer" : status === "in-progress" ? "border bg-green-500 border-primary dark:border-green-900 text-green-50 xl:hover:text-primary dark:hover:text-green-100 dark:hover:border-green-200 cursor-pointer" : "text-gray-500 dark:border-gray-600 border-gray-300 dark:text-gray-300 cursor-not-allowed"} ${index < 2 ? "hidden md:flex" : ""}`}>
            <p className='w-full xl:min-w-full lg:min-w-[170px] min-w-[150px] flex items-center lg:gap-6 gap-4'>
                {icon}
                <span className={`lg:font-extrabold font-bold xl:text-base text-sm transition`}>{name}</span>
                {status === "completed" ? (<IoCheckmark className="ml-auto" />) : status === "in-progress" ? (<HiOutlineArrowLongRight className="ml-auto md:block hidden" />) : ""}
            </p>
          </div>
        ))}
    </aside>
  )
}

export default Steps

