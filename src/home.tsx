import Main from './components/main'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <section className='inline-flex w-full max-w-[960px] border border-zinc-200 bg-white p-5 shadow-md'>
        <Main />
        <Sidebar />
      </section>
    </div>
  )
}
