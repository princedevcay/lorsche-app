import React from 'react';
import { Box, VStack, Input, Textarea, Button, Text } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <VStack id="contact" bg="black" color="gold" p={10} spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">Get in Touch</Text>
      <Text>Contact us for more information.</Text>
      <VStack as="form" spacing={3}>
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="yellow">Send Message</Button>
      </VStack>
    </VStack>
  );
};

export default ContactSection;
