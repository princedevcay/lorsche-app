import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Text, VStack, Heading, Avatar, Center } from '@chakra-ui/react';

// Mock data for testimonials
const testimonialData = [
  {
    name: "Alex Johnson",
    role: "Homeowner",
    avatarUrl: "https://bit.ly/dan-abramov",
    testimonial: "The team at Sprint Energy was professional and thorough. Our energy bills have never been lower!"
  },
  {
    name: "Maria Rodriguez",
    role: "Business Owner",
    avatarUrl: "https://bit.ly/code-beast",
    testimonial: "Installing solar panels was a big investment for us, and Sprint Energy made it worth every penny."
  },
  {
    name: "Samuel Green",
    role: "Investor",
    avatarUrl: "https://bit.ly/ryan-florence",
    testimonial: "Sprint Energy's commitment to sustainable energy solutions is not only admirable but also profitable."
  },
  // ... Add more testimonials as needed
];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

const Testimonials = () => {
  return (
    <Box id="testimonials"  w="full"
    py={10}
    px={{ base: 4, md: 16 }}
    bgImage="url('bg.jpg')" // Update with your image path
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    color="white">
      <VStack spacing={4} align="stretch" textAlign="center">
        <Heading as="h2" size="xl" color="gold" mb={6}>
          Testimonials
        </Heading>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <Center key={index} flexDirection="column" p={5}>
              <Avatar name={testimonial.name} src={testimonial.avatarUrl} size="xl" mb={4} />
              <Text color="gray.300" fontSize="xl" fontWeight="bold" mb={3}>
                {testimonial.name}
              </Text>
              <Text color="gray.400" fontSize="md" mb={3} px={6}>
                {testimonial.testimonial}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {testimonial.role}
              </Text>
            </Center>
          ))}
        </Slider>
      </VStack>
    </Box>
  );
};

export default Testimonials;
