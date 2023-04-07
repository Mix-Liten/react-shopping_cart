import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function RootLayout() {
  return (
    <>
      <Header />
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 2, xl: 1 }}
          bg="yellow.200"
          minH={{ md: 'calc(100vh - 4.5rem)' }}
          p={{ base: '20px', md: '30px' }}
          display={{ base: 'none', md: 'block' }}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 6, md: 4, xl: 5 }}
          bg="yellow.50"
          p="40px"
          minH={{ base: 'calc(100vh - 4.5rem)', md: 'auto' }}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </>
  )
}
