import React from 'react';
import { Box, Heading, Text, Button, VStack, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box id="hero" w="full" h="80vh" textAlign="center" position="relative" overflow="hidden">
      {/* Local Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text is readable */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="blackAlpha.600"
        zIndex={0}
      />

      {/* Content */}
      <VStack zIndex={1} position="relative" spacing={4} justify="center" h="full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Container maxW="container.xl">
            <Heading as="h1" size="2xl" color="white" mb="4">
              Welcome to Lorsche's Shea Butter World
            </Heading>
            <Text color="white" fontSize="xl" maxW="xl" mx="auto" mb="4">
              Discover the natural beauty of shea butter and experience its nourishing benefits for your skin and hair.
            </Text>
            <Button colorScheme="white" variant="outline">
              Learn More
            </Button>
          </Container>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default HeroSection;
