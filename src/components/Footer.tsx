import { Laptop2, List, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (<footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex justify-between">
        <div className='flex items-center gap-3'>
            <Image src='/Roots1996.jpeg' className='rounded-md' width={56} height={56} alt='Capa album Roots da banda Sepultura' />
            <div className='flex flex-col'>
                <strong className='font-normal'>Roots Bloody Roots</strong>
                <span className='text-zinc-400 text-xs'>Sepultura</span>
            </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
            <div className='flex gap-3 items-center'>
                <Shuffle size={20} className='text-zinc-400' />
                <SkipBack size={20} className='text-zinc-400' />
                <button className='w-8 h-8 flex justify-center items-center pl-1 bg-white text-black rounded-full'>
                    <Play />
                </button>
                <SkipForward size={20} className='text-zinc-400' />
                <Repeat size={20} className='text-zinc-400' />
            </div>

            <div className='flex items-center gap-2'>
                <span className='text-zinc-400 text-xs'>0:00</span>
                <div className='bg-zinc-500 rounded-full h-1 w-96'>
                    <div className='bg-zinc-200 rounded-full h-1 w-40' />
                </div>
                <span className='text-zinc-400 text-xs'>3:14</span>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <Mic2 size={20} />
            <List size={20} />
            <Laptop2 size={20} />
            <Volume size={20} />
            <div className='bg-zinc-500 rounded-full h-1 w-24'>
                <div className='bg-zinc-200 rounded-full h-1 w-10' />
            </div>
            <Maximize2 size={20} />
        </div>
    </footer>)
}
