import { useFetch } from "../../hook/index";
import { DetailsType } from "../../types/data";
import SkipCard from "../common/SkipCard";
import LoadingError from "../common/LoadingError";
import { useContext } from "react"
import { RemContext, RemContextType } from "../../types/context"
import SkipPopUp from "../common/SkipPopUp";



const Skips = () => {
  const {setSelectedSkip} = useContext(RemContext) as RemContextType
  const { data, loading, error } = useFetch(import.meta.env.VITE_HOST_BASE_URL, "GET");


  return (
    <div className='lg:col-span-4 flex flex-col gap-9 w-full p-5 lg:rounded-3xl rounded-xl border border-gray-400 dark:border-gray-600'>
        <div className='flex flex-col items-start justify-center xl:gap-3 lg:gap-2 gap-1 text-gray-900 dark:text-white font-poppins'>
            <h1 className='font-extrabold xl:text-3xl md:text-2xl text-lg'>Choose Your Skip Size</h1>
            <p className='lg:font-semibold font-medium md:text-base text-sm'>Select the skip size that best suits your needs</p>
        </div>

       <SkipPopUp />
        <LoadingError loading={loading} error={error!} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map(({ id, size, allowed_on_road, allows_heavy_waste, hire_period_days, price_before_vat }: DetailsType) => (
                <SkipCard
                  key={id}
                  id={id}
                  size={size}
                  allowed_on_road={allowed_on_road}
                  allows_heavy_waste={allows_heavy_waste}
                  hire_period_days={hire_period_days}
                  price_before_vat={price_before_vat}
                  onSelect={() => setSelectedSkip({ id, size, price: price_before_vat, period: hire_period_days })}
                />
            ))}
        </div>
      </div>
  )
}

export default Skips