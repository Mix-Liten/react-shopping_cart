import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { formatCurrency } from '../utils/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

type StoreItemProps = {
  id: number
  name: string
  price: number
  description: string
  imgUrl: string
}

export default function StoreItem({ id, name, price, description, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <Card>
      <CardBody>
        <Image src={imgUrl} h="200px" w="100%" objectFit="cover" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="blue.400" fontSize="2xl" textAlign="right">
            {formatCurrency(price)}
          </Text>
          {quantity === 0 ? (
            <Button colorScheme="cyan" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <Flex flexWrap="wrap" direction="column" gap="4">
              <Flex justifyContent="center" alignItems="center" gap="4">
                <Button colorScheme="cyan" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <Text>{quantity}</Text>
                <Button colorScheme="cyan" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </Flex>
              <Flex justifyContent="center" alignItems="center">
                <Button colorScheme="red" onClick={() => removeFromCart(id)}>
                  remove
                </Button>
              </Flex>
            </Flex>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}
