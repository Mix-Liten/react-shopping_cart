import {
  Box,
  Flex,
  HStack,
  HTMLChakraProps,
  chakra,
  useDisclosure,
  useUpdateEffect,
  Heading,
  Avatar,
  AvatarBadge,
  Button,
  ButtonProps,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MobileNavButton, MobileNavContent } from './MobileNav'
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from './Icons'
import { useShoppingCart } from '../context/ShoppingCartContext'

function HeaderContent() {
  const { openCart, cartQuantity } = useShoppingCart()
  const mobileNav = useDisclosure()
  const mobileNavBtnRef = useRef<HTMLButtonElement>(null)

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <NavLink to="/">
            <chakra.div display="block" aria-label="Chakra UI, Back to homepage">
              <Box minW="3rem">
                <Heading as="h1" color="orange.900">
                  Shop.
                </Heading>
              </Box>
            </chakra.div>
          </NavLink>
        </Flex>

        <Flex justify="flex-end" w="100%" align="center" color="gray.400" maxW="1100px">
          {cartQuantity > 0 && (
            <HStack spacing="5" color="orange.900" mr="4">
              <Avatar
                as={(props: ButtonProps) => (
                  <Button
                    {...props}
                    colorScheme="yellow"
                    _hover={{ bg: 'yellow.600' }}
                    _active={{
                      bg: 'yellow.400',
                      borderColor: 'blackAlpha.400',
                      transform: 'scale(0.9)',
                      color: 'blackAlpha.700',
                      boxShadow: 'dark-lg',
                    }}
                  />
                )}
                bg="yellow.500"
                icon={<ShoppingCartIcon />}
                border="1px"
                fontSize="1.8em"
                onClick={openCart}
              >
                <AvatarBadge
                  boxSize="1em"
                  borderWidth={1}
                  bg="red.500"
                  fontSize="0.7em"
                  w="1.8em"
                  transform="translate(40%, 40%)"
                >
                  {cartQuantity}
                </AvatarBadge>
              </Avatar>
            </HStack>
          )}
          <HStack spacing="5">
            <MobileNavButton ref={mobileNavBtnRef} aria-label="Open Menu" onClick={mobileNav.onOpen} />
          </HStack>
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  )
}

function Header(props: HTMLChakraProps<'header'>) {
  const { maxW = '8xl', maxWidth = '8xl' } = props
  const ref = useRef<HTMLHeadingElement>()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg="yellow.300"
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW={maxW} maxWidth={maxWidth}>
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
