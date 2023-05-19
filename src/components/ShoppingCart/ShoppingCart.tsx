import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
} from '@chakra-ui/react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CartItem from './CartItem'
import { formatCurrency } from '../../utils/formatCurrency'
import storeItems from '../../data/items.json'
import { useEffect } from 'react'

type ShoppingCartProps = {
  isOpen: boolean
  onClose: () => void
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { cartItems, cartQuantity } = useShoppingCart()

  useEffect(() => {
    if (isOpen && cartQuantity === 0) onClose()
  }, [isOpen, cartQuantity])

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>ShoppingCart</DrawerHeader>

        <DrawerBody as={Stack} gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartQuantity > 0 && (
            <Flex justifyContent="flex-end" fontWeight="bold">
              Total:{' '}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price ?? 0) * cartItem.quantity
                }, 0)
              )}
            </Flex>
          )}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="yellow">Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ShoppingCart
