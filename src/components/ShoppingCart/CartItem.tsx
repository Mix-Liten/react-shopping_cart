import { useShoppingCart } from '../../context/ShoppingCartContext'
import storeItems from '../../data/items.json'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { formatCurrency } from '../../utils/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Flex alignItems="center" gap={2}>
      <Image src={item.imgUrl} w="25%" h="100px" objectFit="cover" />
      <Box flex="2">
        <Text>
          {item.name} x{quantity}
        </Text>
        <Text>{formatCurrency(item.price)}</Text>
      </Box>
      <Flex flex="1" alignItems="center" gap={2}>
        <Text>{formatCurrency(item.price * quantity)}</Text>
        <Button variant="outline" onClick={() => removeFromCart(item.id)}>
          &times;
        </Button>
      </Flex>
    </Flex>
  )
}

export default CartItem
