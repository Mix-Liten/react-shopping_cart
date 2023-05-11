import { Box } from '@chakra-ui/react'
import storeItems from '../data/items.json'

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      {storeItems.map(item => (
        <Box>{JSON.stringify(item)}</Box>
      ))}
    </>
  )
}
