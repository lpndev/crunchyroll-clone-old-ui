import { SearchIcon } from 'lucide-react'

export function Search() {
  return (
    <form action='#' className='group relative inline-flex items-center'>
      <input
        name='search'
        type='search'
        placeholder='Anime, drama, etc.'
        className='h-10 w-48 rounded border border-zinc-300 px-2 focus:outline-none'
      />
      <button type='submit' className='absolute right-0 p-2'>
        <SearchIcon
          size={20}
          className='bg-white text-zinc-400 transition group-hover:text-accent'
        />
      </button>
    </form>
  )
}
