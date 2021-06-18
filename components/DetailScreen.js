import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function DetailScreen({ data }) {
    console.log(data)
    const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-row h-4/5 w-4/5">
                <div className="h-full flex items-center justify-center">
                    <Image className='rounded-xl object-fill object-center' src={IMAGE_URL + data.poster_path} width={640} height={940} />
                </div>
                <div className="flex flex-col h-full w-full ml-10">
                    <div className="flex justify-between items-center">
                        <p className="text-4xl tracking-tracking-widest font-bold">{data.title}</p>
                        <div className="flex items-center">
                            <StarIcon className="h-12 transform hover:text-white transition duration-150 ease-in-out hover:scale-125" />
                            <p className="text-4xl tracking-tracking-widest font-bold ml-2">
                                {data.vote_average}/10
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 w-2/3">
                        <p className="text-xl">{data.overview}</p>
                    </div>
                    <div className="mt-16 w-2/3">
                        <p className="text-xl">{data.release_date}</p>
                    </div>
                    <div className="mt-16 w-2/3 flex">
                        {data.genres.map((genre) => {
                            return <div className="mr-4 hover:bg-[#03171f] cursor-pointer">
                                <p className="text-xl border-2 text-center px-4 py-2 rounded-full whitespace-nowrap">{genre.name}</p>
                            </div>
                        })}
                    </div>
                    <Link href={data.homepage}>
                    <div className="mt-16 w-40 p-5 bg-gray-600 hover:bg-gray-400 rounded-full cursor-pointer">
                        <p className="text-xl text-center text-black font-bold">More...</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailScreen
