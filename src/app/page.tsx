import { Footer } from '@/components/Footer'
import { MiniPlaylist } from '@/components/MiniPlaylist'
import { Playlist } from '@/components/Playlist'
import { Sidebar } from '@/components/Sidebar'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, List, Maximize, Maximize2, Laptop2, Volume } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
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
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Daily Mix 1' link='#' />
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Daily Mix 2' link='#' />
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Daily Mix 3' link='#' />
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Daily Mix 4' link='#' />
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Daily Mix 5' link='#' />
            <MiniPlaylist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Bloods' link='#' />
          </div>

          <h2 className='font-semibold text-xl mt-6'>Made for Yago Ernandes</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <Playlist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Blood' artists='Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais' link='#' />
            <Playlist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Blood bloody Roots' artists='Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais' link='#' />
            <Playlist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='This is Sepultura' artists='Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais' link='#' />
            <Playlist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Sepultura' artists='Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais' link='#' />
            <Playlist image='/Roots1996.jpeg' altImage='Capa do album de Sepultura' title='Heavy Metal' artists='Seu Jorge, Bezerra da Silva, Zeca Pagodinho e mais' link='#' />

          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
