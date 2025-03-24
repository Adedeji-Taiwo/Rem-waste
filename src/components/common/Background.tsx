
const Background = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-2 -space-x-40 opacity-30 dark:opacity-15">
      <div className="blur-[90px] h-48 bg-gradient-to-br from-primary/80 to-purple-300 dark:from-blue-500 dark:to-blue-700"></div>
      <div className="blur-[90px] h-28 bg-gradient-to-r from-cyan-300 to-sky-200 dark:to-indigo-500"></div>
    </div>
  )
}

export default Background
