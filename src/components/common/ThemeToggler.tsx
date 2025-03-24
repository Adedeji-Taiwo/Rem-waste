import { useContext } from "react"
import { RemContext, RemContextType } from "../../types/context"
import { DarkModeSwitch } from 'react-toggle-dark-mode'


const ThemeToggler = () => {
    const {darkMode, toggleDarkMode} = useContext(RemContext) as RemContextType

  return (
    <div className="relative pt-36">
          <div className="lg:w-2/3 text-center mx-auto">
            <DarkModeSwitch
              className='w-5 h-5 absolute md:right-3 md:left-auto md:top-24 top-20 mx-auto right-0 left-0'
              checked={darkMode}
              onChange={toggleDarkMode}
              size={120}
            />
            </div>
        </div>
  )
}

export default ThemeToggler