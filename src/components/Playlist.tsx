import Image from "next/image";

interface Prop {
    image: string
    altImage: string
    title: string
    artists: string
    link: string
}

export function Playlist({
    image,
    altImage = '',
    title,
    artists,
    link,
}: Prop) {
    return (<a href={link} className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
        <Image src={image} className='w-full rounded-md' width={80} height={80} alt={altImage} />
        <strong className='font-semibold'>{title}</strong>
        <span className='text-sm text-zinc-400'>{artists}</span>
    </a>)
}
