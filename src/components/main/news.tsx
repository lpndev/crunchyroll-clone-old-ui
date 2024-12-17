import { NEWS_DATA } from '../../constants'

function LatestNews() {
  return (
    <section className='flex flex-col gap-4'>
      <div>
        <a href='#'>
          <p className='text-2xl font-semibold'>Latest News</p>
        </a>
        <hr className='border-zinc-400' />
      </div>
      {Array(6)
        .fill(null)
        .flatMap(() =>
          NEWS_DATA.map((item, i) => (
            <div
              key={`${i}-${Math.random()}`}
              className='inline-flex gap-4 border-b border-zinc-200 pb-6'
            >
              <a
                href='#'
                className='max-h-[160px] min-h-[160px] min-w-[160px] max-w-[160px]'
              >
                <img
                  src={item.image}
                  alt='news image'
                  className='object-cover'
                  width={160}
                  height={160}
                />
              </a>
              <div className='flex flex-col gap-2'>
                <a href='#'>
                  <p className='text-lg font-semibold leading-tight'>
                    {item.title}
                  </p>
                </a>
                <p className='text-sm text-zinc-500'>
                  Posted by{' '}
                  <a href='#' className='text-accent'>
                    {item.author}
                  </a>{' '}
                  {item.date}
                </p>
                <p className='text-sm leading-tight'>{item.description}</p>
              </div>
            </div>
          )),
        )}
    </section>
  )
}

export { LatestNews }
