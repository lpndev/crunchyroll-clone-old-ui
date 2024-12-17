import { NAVBAR_LINKS } from '../../constants'
import { Logo } from '../ui/logo'
import { Search } from './search'

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center bg-white p-5 shadow-lg'>
      <nav className='inline-flex w-full max-w-[960px] items-center justify-between gap-4'>
        <div className='inline-flex gap-8'>
          <Logo />
          <ul className='inline-flex items-center gap-4'>
            {NAVBAR_LINKS.main.map((item, i) => (
              <li
                key={i}
                className='font-semibold transition hover:text-accent'
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='inline-flex items-center gap-6'>
          <ul className='inline-flex items-center gap-4'>
            {NAVBAR_LINKS.other.map((item, i) => (
              <li key={i}>
                <a
                  href={item.path}
                  className='group flex flex-col items-center text-zinc-400 hover:text-accent'
                >
                  {item.filled ? (
                    <item.icon
                      size={22}
                      strokeWidth={1.25}
                      fill='#A1A1AA'
                      className='text-white group-hover:fill-accent'
                    />
                  ) : (
                    <item.icon
                      size={22}
                      strokeWidth={1.25}
                      className='group-hover:text-accent'
                    />
                  )}
                  <span className='text-xs'>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <Search />
        </div>
      </nav>
    </header>
  )
}
