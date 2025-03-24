import { Background, Skips, Steps, ThemeToggler } from "../index"



const Main = () => {

  return (
    <main className="lg:px-8 px-4 relative w-full">
      <Background />
      <ThemeToggler />

      <div className='w-full grid xl:grid-cols-5 grid-cols-1 xl:gap-y-7 lg:gap-y-5 xl:gap-x-4 gap-y-3'>
        <Steps />
        <Skips />
      </div>
    </main>
  )
}

export default Main