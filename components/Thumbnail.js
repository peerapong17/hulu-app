import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Thumbnail({ vote_average, original_name, title, overview, vote_count, backdrop_path, id, poster_path }) {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <Link href={`/Detail/?id=${id}`}>
            <div className="p-3 my-7 group transition duration-200 ease-in transform hover:z-50 sm:hover:scale-105 overflow-hidden">
                <div className="p-3">
                    <Image className='rounded-xl object-fill object-center' layout="responsive" src={IMAGE_URL + poster_path} width={250} height={300} />
                    <p className="truncate mx-w-md my-2">{overview}</p>
                    <div className="flex justify-between group-hover:text-white font-mono text-2xl tracking-tight">
                        {title || original_name || original_title}
                    </div>
                    <div className="flex justify-between mt-3 items-center font-bold text-xl">
                        <div className="flex cursor-pointer items-center">
                            <StarIcon className="h-5 mr-2 transform hover:text-white transition duration-150 ease-in-out hover:scale-125" />
                            {vote_average}
                        </div>

                        <div className="flex cursor-pointer items-center">
                            <ThumbUpIcon className="h-5 mx-2 transform hover:text-white transition duration-150 ease-in-out hover:scale-125" />
                            {vote_count}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
