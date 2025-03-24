import { useContext } from "react"
import { RemContext, RemContextType } from "../../types/context"
import { menuData } from "../../data/header"
import { MenuItemsType } from "../../types/header"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md";
import { Button, Logo } from '../index'



const Header = () => {
    const {openMenu, setOpenMenu, handleMenuOpen} = useContext(RemContext) as RemContextType
  return (
    <header>
        <nav className="lg:px-8 px-4 w-full absolute z-10">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:gap-0 relative">
                <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                    <Logo />
                    <div className="relative flex items-center justify-start lg:hidden max-h-10 md:mr-0 mr-3 cursor-pointer" onClick={handleMenuOpen}>
                            {openMenu ? (
                                <MdOutlineClose className={`m-auto mt-2 h-5 w-5 rounded text-gray-900 dark:text-gray-300 transition duration-300`} />
                            ) : (
                                <HiOutlineMenuAlt4 className={`m-auto h-5 w-5 rounded text-gray-900 dark:text-gray-300 transition duration-300`} />
                            )}
                    </div>
                </div>
                <div aria-hidden="true" className={`fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 ${openMenu && 'origin-top scale-y-100'} lg:hidden dark:bg-gray-900/70`}></div>
                <div className={`flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            ${openMenu && 'scale-100 opacity-100 lg:translate-y-0'} lg:shadow-none dark:lg:bg-inherit dark:bg-gray-800 dark:border-gray-700 ${openMenu ? "block" : "hidden"}
                            dark:shadow-none`}>
                   
                    <div className="text-gray-900 dark:text-white lg:pr-4 lg:w-auto w-full lg:pt-0">
                        <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                            {menuData.map(({id, title}: MenuItemsType) => (
                                 <li key={id} onClick={() => setOpenMenu(false)}>
                                 <a href={`#${title}`} className="block md:px-4 transition hover:text-primary">
                                     <span className='capitalize'>{title}</span>
                                 </a>
                             </li>
                            ))}
                        </ul>
                    </div>

                    <Button
                        type="button"
                        className="mt-12 lg:mt-0 h-11  before:bg-primary"
                        onClick={() => setOpenMenu(false)}
                        children={<span className="relative text-sm font-semibold text-white">Get Started</span>}
                    />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header