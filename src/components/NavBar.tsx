import { Avatar, AvatarBadge, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px" gap="10px">
      <Heading as="h1">Shop.</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="" name="yoshi" bg="yellow.400">
          <AvatarBadge w="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
      </HStack>
    </Flex>
  )
}
