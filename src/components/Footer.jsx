import {
  Box, SimpleGrid, VStack, Text, Link, IconButton, HStack, Heading, Input, Button
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  // Function to handle newsletter signup (to be implemented)
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log('Newsletter signup submitted');
  };

  return (
    <Box bg="gray.900" color="gray.100" px={{ base: 5, sm: 10 }} py={10} w="full"> {/* Darker shade for footer */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

        {/* First Column: "Get in Touch" with Contact Info and Social Media Links */}
        <VStack spacing={3} alignItems="start" color="gray.300"> {/* Lighter text color */}
          {/* ...content */}
        </VStack>

        {/* ...other columns */}

      </SimpleGrid>
      
      {/* Copyright Text */}
      <Text fontSize="sm" mt={10} textAlign="center">
        © {new Date().getFullYear()} Sprint Energy. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
