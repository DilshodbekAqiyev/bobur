import { v4 as uuidv4 } from 'uuid'

export const navbarMenus = [
  {
    id: uuidv4(),
    name: 'homeLink',
    link: '/',
  },
  {
    id: uuidv4(),
    name: "G'azallar",
    link: '/gazallar',
  },
  {
    id: uuidv4(),
    name: 'walksMade',
    link: '/walksMade',
  },
  {
    id: uuidv4(),
    name: 'Contact us',
    link: '/contactus',
  },
]
