import { MdLocationPin } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { SidebarDataType } from "../types/sidebar";
import { FaTruck, FaCalendarAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

export const SidebarData: SidebarDataType[] = [
    {
        id: 1,
        status: "completed",
        icon:  <MdLocationPin className={`xl:w-6 xl:h-6 h-5 w-5 fill-current`} />,
        name: "Postcode",
    },
    {
        id: 2,
        status: "completed",
        icon: <ImBin className={`w-5 h-5 fill-current`} />,
         name: "Waste Type"
    },
    {
        id: 3,
        status: "in-progress",
        icon: <FaTruck className={`w-5 h-5 fill-current`} />,
        name: "Select Skip"
    },
    {
        id: 4,
        status: "uncompleted",
        icon: <IoShieldCheckmarkSharp className={`w-5 h-5 fill-current`} />,
        name: "Permit Check"
    },
    {
        id: 5,
        status: "uncompleted",
        icon: <FaCalendarAlt className={`w-5 h-5 fill-current`} />,
        name: "Choose Date"
    },
    {
        id: 6,
        status: "uncompleted",
        icon: <BsFillCreditCard2BackFill className={`w-5 h-5 fill-current`} />,
        name: "Payment"
    },
]