import requests from '../utils/request'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Nav() {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className="flex px-7 sm:text-2xl whitespace-nowrap mx-auto sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => {
                    return <Link href={`/?genre=${key}`} key={key}>
                        <div className="hover:bg-[#03171f] group px-4 active:bg-[#02131a] rounded-2xl">
                            <p className="my-5 text-gray-400 group-hover:text-white hover:cursor-pointer">
                                {title}
                            </p>
                        </div>
                    </Link>
                })}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-28 w-1/12" />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-28 w-1/12" />
        </nav>
    )
}

export default Nav
