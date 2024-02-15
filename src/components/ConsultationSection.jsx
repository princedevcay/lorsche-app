import React from 'react';
import {
  Box, Flex, VStack, Heading, Text, Input, Select, Button, useBreakpointValue
} from '@chakra-ui/react';

const Consultation = () => {
  // Determine the orientation based on the breakpoint
  const orientation = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Flex
      id="consultation"
      direction={{ base: 'column', md: 'row' }}
      w="full"
      h="500px" // or set to 'auto' for variable height based on content
    >
      {/* Background Image Column */}
      <VStack
        w={{ base: 'full', md: '50%' }}
        h="full"
        bgImage="url('https://source.unsplash.com/featured/?solarpanels')"
        bgSize="cover"
        bgPosition="center"
        p={10}
        spacing={4}
        align="flex-start"
        justify="center"
      >
        <Heading as="h3" size="lg" color="white">
          Free Consultation
        </Heading>
        <Text color="white">
          Let us help you transition to sustainable energy. Fill out the form for a free consultation on our services.
        </Text>
      </VStack>

      {/* Form Column */}
      <VStack
        w={{ base: 'full', md: '50%' }}
        h="full"
        p={10}
        spacing={4}
        align="flex-start"
        bg={{ base: 'black', md: 'black.50' }} // Light background for the form
      >
        <Heading as="h3" color='gold' size="lg" mb={4}>
          Request a Quote
        </Heading>
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Phone Number" />
        {/* Services Select Box */}
        <Select placeholder="Select Service">
          <option value="solar-installation">Solar Panel Installation</option>
          <option value="maintenance">Maintenance</option>
          <option value="battery-storage">Battery Storage</option>
          {/* ... more options ... */}
        </Select>
        <Button color="white" bg={"gold"} w="full">
          Submit
        </Button>
      </VStack>
    </Flex>
  );
};

export default Consultation;
