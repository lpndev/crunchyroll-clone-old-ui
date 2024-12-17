import type { LinksProps } from '../../types'

export function Links({ category, links }: LinksProps) {
  return (
    <div className='flex flex-col gap-2 text-xs'>
      <h6 className='text-nowrap font-semibold text-zinc-600'>{category}</h6>
      <ul className='flex flex-col gap-1'>
        {links.map((item, i) => (
          <li key={i} className='w-fit text-zinc-500 hover:text-accent'>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
