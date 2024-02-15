import React, { useRef } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const About = () => {
  // Create a ref for the about section
  const aboutRef = useRef();

  return (
    // Attach the ref to the Box component
    <Box
      ref={aboutRef}
      id="about"
      w="full"
      py={10}
      px={{ base: 4, md: 16 }}
      bgImage="url('bg.jpg')" // Update with your image path
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      color="white"
    >
      <VStack spacing={4} align="stretch" textAlign="center">
        <Heading as="h2" size="xl" color="gold">
          Who We Are
        </Heading>
        <Text fontSize="xl" color="white">
          Pioneering the Solar Revolution
        </Text>
        <Text color="white" mt={4}>
          Sprint Energy is at the forefront of the green energy movement, harnessing the power of the sun to bring renewable energy to homes and businesses across the nation. Founded by visionaries in the field of renewable energy, we are committed to reducing the carbon footprint and fostering a sustainable future.
        </Text>
        <Text color="white" mt={4}>
          Our innovative approach goes beyond providing solar solutions. We're advocates for policy change, educators of green energy benefits, and partners in sustainability. With each solar panel installed, we're not just capturing sunlight—we're ensuring a brighter future for the next generation.
        </Text>
        <Text color="white" mt={4}>
          Join us on our journey to a cleaner, more sustainable tomorrow.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
