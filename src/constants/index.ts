import { Bookmark, Dice2Icon, UserIcon } from 'lucide-react'

export const API_ENDPOINT = 'https://api.jikan.moe/v4/anime'

export const NAVBAR_LINKS = {
  main: [
    { name: 'Shows', path: '#' },
    { name: 'Manga', path: '#' },
    { name: 'News', path: '#' },
    { name: 'Games', path: '#' },
    { name: 'Store', path: '#' },
  ],
  other: [
    { name: 'Login', path: '#', icon: UserIcon },
    { name: 'Queue', path: '#', icon: Bookmark, filled: true },
    { name: 'Random', path: '#', icon: Dice2Icon, filled: true },
  ],
}

export const NEWS_DATA = [
  {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis dolore natus.',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veritatis voluptas quasi vitae velit esse quas commodi consectetur? Ut, corrupti labore ea ad esse nihil repudiandae expedita quasi debitis, fugit harum, voluptatibus illo consequatur in tenetur adipisci aliquam velit fuga! Ex quidem, debitis enim placeat quod doloremque ullam repellendus a facere illum magnam qui id, excepturi voluptatem impedit natus beatae totam doloribus sequi saepe quos architecto, dolores non! Perferendis bea...',
    author: 'Author Name',
    date: '5 days ago',
    image: 'https://placehold.co/160x160',
  },
]

export const FOOTER_LINKS = [
  {
    category: 'Popular Shows',
    links: [
      { name: 'Steins;Gate', path: '#' },
      { name: 'NHK ni Youkoso!', path: '#' },
      { name: 'Angel Beats!', path: '#' },
      { name: 'Clannad: After Story', path: '#' },
      { name: 'BORUTO: NARUTO NEXT GENERATIONS', path: '#' },
      { name: 'Naruto Shippuden', path: '#' },
      { name: 'Black Clover', path: '#' },
      { name: 'Gintama', path: '#' },
    ],
  },
  {
    category: 'Platforms and Devices',
    links: [
      { name: 'Chromecast', path: '#' },
      { name: 'Xbox One', path: '#' },
      { name: 'PlayStation 4', path: '#' },
      { name: 'Apple iOS', path: '#' },
      { name: 'Android', path: '#' },
      { name: 'Apple TV', path: '#' },
      { name: 'Roku Box', path: '#' },
      { name: 'Fire TV', path: '#' },
    ],
  },
  {
    category: 'Premium Memberships',
    links: [
      { name: 'Two-Week Free Trial', path: '#' },
      { name: 'Gift Memberships', path: '#' },
      { name: 'Redeem Crunchyroll/VRV Gift Card', path: '#' },
    ],
  },
  {
    category: 'Language Options',
    links: [
      { name: 'English (US)', path: '#' },
      { name: 'English (UK)', path: '#' },
      { name: 'Español (América Latina)', path: '#' },
      { name: 'Español (España)', path: '#' },
      { name: 'Português (Brasil)', path: '#' },
      { name: 'Português (Portugal)', path: '#' },
      { name: 'Français (France)', path: '#' },
      { name: 'Deutsch', path: '#' },
      { name: 'العربية', path: '#' },
      { name: 'Italiano', path: '#' },
      { name: 'Русский', path: '#' },
    ],
  },
  {
    section: [
      { category: 'Support', links: [{ name: 'Help/FAQ', path: '#' }] },
      {
        category: 'Crunchyroll Store',
        links: [
          { name: 'Payment Settings', path: '#' },
          { name: 'Store Information', path: '#' },
          { name: 'Forums', path: '#' },
        ],
      },
    ],
  },
  {
    category: 'Crunchyroll Info',
    links: [
      { name: 'About', path: '#' },
      { name: 'Jobs', path: '#' },
      { name: 'Advertising', path: '#' },
      { name: 'Copyright Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'AdChoices', path: '#' },
      { name: 'Cookie Consent Tool', path: '#' },
      { name: 'Do Not Sell My Personal Information', path: '#' },
    ],
  },
]
