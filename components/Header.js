import Image from "next/image"
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row md:grid md:grid-cols-3">
            <div className="justify-evenly flex md:col-span-2 overflow-x-scroll scrollbar-hide">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDIND" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain md:col-span-1"
                src="https://links.papareact.com/ua6" width={200} height={100} />
        </header>
    )
}
