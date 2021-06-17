export default function HeaderItem({ title, Icon }) {
    return (
        <div className="flex flex-col cursor-pointer group hover:text-white">
            <Icon className="h-8 my-5 group-hover:animate-bounce" />
            {/* <p className="opacity-0 group-hover:opacity-100 max-w-xs">{title}</p> */}
        </div>
    )
}
