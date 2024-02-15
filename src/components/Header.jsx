import {
  Flex, Box, Image, IconButton,
  Stack, Icon, useDisclosure,
  Drawer, DrawerOverlay, DrawerContent,
  DrawerHeader, DrawerBody, VStack, HStack, Button, Text, Link
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom'; // Import the Router Link

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="full"
      px={6}
      bg="black"
      color="white"
    >
      {/* Logo Column */}
      <Box  zIndex="3" flexBasis={{ base: '50%', md: '33.333%' }}>
        <RouterLink to="/">
          <Image src="logo.jpg" alt="Sprint Energy" width={{ base: '50%', md: '33.333%' }} borderRadius="full" />
        </RouterLink>
      </Box>


      {/* Navigation Links Column - Hidden on mobile */}
      <Stack
        direction="row"
        display={{ base: 'none', md: 'flex' }}
        width={{ md: '33.333%' }}
        justifyContent="center"
        alignItems="center"
        _hover={"gold"}
      >
        <RouterLink to="/" p={2} color="white" textTransform="uppercase" _hover={{ color: "gold", textDecoration: "none" }} >
          Home
        </RouterLink>
      </Stack>

      {/* Social Links Column - Hidden on mobile */}
      <Stack
        direction="row"
        spacing={4}
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="flex-end"
        flexBasis={{ md: '33.333%' }}
      >
        <Link href="https://facebook.com" isExternal><Icon as={FaFacebookF} color={"customColor"} w={5} h={5} /></Link>
        <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={5} h={5} color={"customColor"} /></Link>
        <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={5} h={5} color={"customColor"} /></Link>
        <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedinIn} w={5} h={5} color={"customColor"} /></Link>
      </Stack>

      {/* Mobile Menu Icon */}
      <Box display={{ base: 'block', md: 'none' }} flexBasis="50%" textAlign="right">
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open Menu"
          onClick={onOpen}
          bgColor={"customColor"}
          border={"none"}
          colorScheme='customColor'
        />
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg={"customColor"}>
            <IconButton
              icon={<CloseIcon />}
              variant="outline"
              aria-label="Close Menu"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody color={"white"} bg={"black"}>
            <VStack>
            <RouterLink to="/" onClick={onClose} textTransform="uppercase" p={2}  _hover={{ color: "gold", textDecoration: "none" }}>Home</RouterLink>
            </VStack>
            {/* Contact Info
          <VStack spacing={2} mt={20}>
            <Text fontSize="lg" color="white">Call Us: +233244596131</Text>
            <Text fontSize="lg" color="white">lquartey@sprintenergygh.com</Text>
            <HStack mt={4}>
        <Link href="https://facebook.com" isExternal><Icon as={FaFacebookF} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://twitter.com" isExternal><Icon as={FaTwitter} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://instagram.com" isExternal><Icon as={FaInstagram} w={5} h={5} color={"gold"} /></Link>
        <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedinIn} w={5} h={5} color={"gold"} /></Link>
      </HStack>
          </VStack>
          */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
