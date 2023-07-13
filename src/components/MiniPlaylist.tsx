import { Play } from "lucide-react";
import Image from "next/image";

interface Prop {
    image: string
    altImage: string
    title: string
    link: string
}

export function MiniPlaylist({
    image,
    altImage = '',
    title,
    link,
}: Prop) {
    return (<a href={link} className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
        <Image src={image} width={80} height={80} alt={altImage} />
        <strong>{title}</strong>
        <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
            <Play />
        </button>
    </a>)
}
