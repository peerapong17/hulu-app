import requests from '../utils/request'
import {useRouter} from 'next/router'

function Nav() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className="flex px-7 sm:text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => {
                   return <h2 onClick={()=>router.push(`/?genre=${key}`)} className="my-5 text-gray-400 hover:text-white active:text-red-400 transform hover:scale-125 hover:cursor-pointer" key={key}>{title}</h2>
                })}
            </div>
            <div className="absolute top-3 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
            <div className="absolute top-3 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav
