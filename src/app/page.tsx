import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, List, Maximize, Maximize2, Laptop2, Volume } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
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
              <Search />
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
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-4'>Good afternoon</h1>

          <div className='grid grid-cols-3 gap-6 mt-6'>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 flex items-center gap-4 rounded-xl overflow-hidden hover:bg-white/20 transition-colors group'>
              <Image src='/Roots1996.jpeg' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong>Roots Bloody Roots</strong>
              <button className='w-10 h-10 flex justify-center items-center pl-1 bg-green-400 text-black rounded-full ml-auto mr-5 invisible group-hover:visible transition-opacity'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-xl mt-6'>Made for Yago Ernandes</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src='/Roots1996.jpeg' className='w-full rounded-md' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src='/Roots1996.jpeg' className='w-full rounded-md' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src='/Roots1996.jpeg' className='w-full rounded-md' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src='/Roots1996.jpeg' className='w-full rounded-md' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais</span>
            </a>
            <a href="#" className='flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10'>
              <Image src='/Roots1996.jpeg' className='w-full rounded-md' width={80} height={80} alt='Capa album Roots da banda Sepultura' />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais</span>
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex justify-between">
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
      </footer>
    </div>
  )
}
