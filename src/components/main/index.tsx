import { Carousel } from './carousel'
import { LatestNews } from './news'

export default function Main() {
  return (
    <main className='flex flex-1 flex-col gap-6 border-r border-zinc-400 pr-6'>
      <Carousel />
      <LatestNews />
    </main>
  )
}
