import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar'

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="yellow.400"
        minH={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        {/* <Sidebar /> */}
        <span>1</span>
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} bg="yellow.50" p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
