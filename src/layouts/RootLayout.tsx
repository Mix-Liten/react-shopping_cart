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
          bg="yellow.200"
          minH={{ md: 'calc(100vh - 4.5rem)' }}
          p='20px'
          w='120px'
          display={{ base: 'none', md: 'block' }}
          pos="fixed"
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 8 }}
          bg="yellow.50"
          p="40px"
          ml={{base: 'none', md: '120px'}}
          minH={{ base: 'calc(100vh - 4.5rem)' }}
        >
          <Outlet />
        </GridItem>
      </Grid>
    </>
  )
}
