import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (<aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
        </div>
        <nav className='space-y-5 mt-10'>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <HomeIcon />
                Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Search/>
                Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Library />
                Your library
            </a>
        </nav>

        <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-4'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Sepultura</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Muse</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hardneja Sertacore</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist #13</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Corrida Pesada</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Radar de novidades</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sipknot</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eminem</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hipsters Ponto Tech</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Minha carne é de Carnaval</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Vamos a la playa</a>
        </nav>
    </aside>)
}
