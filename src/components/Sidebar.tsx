import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const mainNavLinks = [
  {
    icon: CalendarIcon,
    href: '/',
    label: 'Home',
  },
  {
    icon: EditIcon,
    href: '/about',
    label: 'About',
  },
  {
    icon: AtSignIcon,
    href: '/store',
    label: 'Store',
  },
]

export default function Sidebar() {
  return (
    <List color="orange.900" fontSize="1.2em" spacing={4}>
      {mainNavLinks.map(navLink => (
        <ListItem key={navLink.label}>
          <NavLink to={navLink.href}>
            <ListIcon as={navLink.icon} />
            {navLink.label}
          </NavLink>
        </ListItem>
      ))}
    </List>
  )
}
