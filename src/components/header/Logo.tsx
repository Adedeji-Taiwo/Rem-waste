const Logo = () => {
  return (
    <div aria-label="logo" className="flex space-x-2 items-center">
        <div aria-hidden="true" className="relative flex items-center justify-center">
            <div className="h-12 w-12 border-4 border-green-600 dark:border-primary rounded-full flex items-center justify-center">    
                <div className="relative flex flex-col items-center">
                    <div className="h-1 w-5 bg-gray-900 dark:bg-gray-400 rounded-t-sm"></div>
                    <div className="h-6 w-4 bg-gray-700 dark:bg-gray-200 rounded-b-md"></div>
                </div>
            </div>
            <div className="absolute -top-2 right-2 h-3 w-3 border-r-4 border-b-4 border-green-600 dark:border-primary rotate-45"></div>
            <div className="absolute -bottom-2 left-2 h-3 w-3 border-l-4 border-t-4 border-green-600 dark:border-primary -rotate-45"></div>
        </div>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">REMwaste</span>
    </div>
  )
}

export default Logo


