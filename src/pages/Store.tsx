import { Box, SimpleGrid } from '@chakra-ui/react'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="20px">
        {storeItems.map(item => (
          <Box key={item.id}>
            <StoreItem {...item} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}
