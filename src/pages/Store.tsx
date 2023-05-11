import { Box, SimpleGrid } from '@chakra-ui/react'
import storeItems from '../data/items.json'

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <SimpleGrid columns={[1, 2, 3]} spacing='20px'>
        {storeItems.map(item => (
          <Box key={item.id}>{JSON.stringify(item)}</Box>
        ))}
      </SimpleGrid>
    </>
  )
}
