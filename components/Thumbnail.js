import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

export default function Thumbnail({ poster_path, title, overview, release_date, vote_count, backdrop_path }) {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="px-3 my-7 group transition duration-200 ease-in transform hover:z-50 sm:hover:scale-105 overflow-hidden">
            <div className="p-3">
                <Image className='rounded-xl' layout="responsive" src={IMAGE_URL + backdrop_path} width={500} height={300} />
                <p className="truncate mx-w-md my-2">{overview}</p>
                <p className="text-xl group-hover:text-white">{title || original_title}</p>
                <p className="flex justify-between mt-3 items-center">
                    {release_date}
                    <p className="flex cursor-pointer"><ThumbUpIcon className="h-5 mx-2 transform hover:text-white transition duration-150 ease-in-out hover:scale-125" /> {vote_count}</p>
                </p>

            </div>

        </div>
    )
}
