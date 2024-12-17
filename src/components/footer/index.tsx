import { FOOTER_LINKS } from '../../constants'
import { Links } from './links'

export default function Footer() {
  return (
    <footer className='inline-flex w-full items-center justify-center pb-10'>
      <nav className='inline-flex max-w-[960px] gap-8 px-6'>
        {FOOTER_LINKS.map((item, i) => (
          <div key={i} className='flex flex-col gap-4'>
            {item.section ? (
              item.section.map((item, i) => (
                <Links key={i} category={item.category} links={item.links} />
              ))
            ) : (
              <Links key={i} category={item.category} links={item.links} />
            )}
          </div>
        ))}
      </nav>
    </footer>
  )
}
