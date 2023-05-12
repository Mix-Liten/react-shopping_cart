import { Button, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { formatCurrency } from '../utils/formatCurrency'

type StoreItemProps = {
  id: number
  name: string
  price: number
  description: string
  imgUrl: string
}

export default function StoreItem({ name, price, description, imgUrl }: StoreItemProps) {
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
          <Button colorScheme="cyan">+ Add To Cart</Button>
          <Flex flexWrap="wrap" direction="column" gap="4">
            <Flex justifyContent="center" alignItems="center" gap="4">
              <Button colorScheme="cyan">-</Button>
              <Text>99</Text>
              <Button colorScheme="cyan">+</Button>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Button colorScheme="red">remove</Button>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  )
}
