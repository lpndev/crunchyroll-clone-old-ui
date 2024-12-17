export default function Sidebar() {
  return (
    <aside className='w-full max-w-96 pl-8'>
      <section className='flex flex-col gap-4'>
        <div>
          <h6 className='font-semibold'>Categories</h6>
        </div>
        <div className='flex flex-col gap-6'>
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href='#'
              className='-m-2 inline-flex w-full gap-4 p-2 hover:shadow'
            >
              <img src='https://placehold.co/50x75' alt='' />
              <div>
                <p className='font-medium'>Anime Name</p>
                <p className='text-sm text-zinc-500'>120 episodes</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </aside>
  )
}
