import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Services = () => {
  // Enhanced services list with mock images and descriptions
  const servicesList = [
    {
      name: "Custom Solar Panel Design",
      description: "Bespoke solar panel designs that cater to unique architectural aesthetics without compromising on efficiency.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,design",
    },
    {
      name: "Solar Water Heating",
      description: "Install solar water heating systems to reduce the cost of hot water in your home or business.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,waterheating",
    },
    {
      name: "Solar Car Charging Stations",
      description: "Implement solar-powered charging stations for electric vehicles, making your business future-ready.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,chargingstation",
    },
    {
      name: "Smart Solar Monitoring",
      description: "Advanced monitoring systems that provide real-time insights into your solar energy usage and efficiency.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,monitoring",
    },
    {
      name: "Energy Production Guarantees",
      description: "Our solar panel systems come with an energy production guarantee to ensure your investment is secure.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,guarantee",
    },
    {
      name: "Solar Incentive Consultation",
      description: "Expert guidance on navigating the various solar incentives and tax credits available to maximize your savings.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,incentives",
    },
    {
      name: "Solar Panel Recycling",
      description: "Eco-friendly disposal and recycling services for outdated or non-functional solar panels.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,recycling",
    },
    {
      name: "Off-site Solar Farms",
      description: "Invest in solar energy without the need for on-site installations with our solar farm solutions.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,farm",
    },
    {
      name: "Disaster Resilient Solar Solutions",
      description: "Solar installations designed to withstand severe weather conditions and provide continuous power.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,disasterresilient",
    },
    {
      name: "Solar Energy Land Assessments",
      description: "Comprehensive land and site assessments for optimal placement and installation of solar farms.",
      imageUrl: "https://source.unsplash.com/1600x900/?solar,landassessment",
    }
  ];

  const settings = {
    dots: true, // Enable dot indicators for navigation
    infinite: false, // Don't loop slides
    speed: 500,
    slidesToShow: 3, // Number of slides to show in one view
    slidesToScroll: 3, // Number of slides to scroll on one navigation click
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box id="services" w="full" py={10} px={6} bg="black">
      <Heading as="h2" size="xl" color="gold" textAlign="center" mb={6}>
        Our Services
      </Heading>
      <Slider {...settings}>
        {servicesList.map((service, index) => (
          <Box key={index} px={2} py={2}>
            <VStack
              bg="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(10px)"
              rounded="lg"
              overflow="hidden"
              transition="transform 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Box
                bgImage={service.imageUrl}
                bgPosition="center"
                bgSize="cover"
                h="180px" // Adjust the height as needed
                w="full"
              />
              <Box p={5}>
                <Heading as="h3" size="lg" color="gold">{service.name}</Heading>
                <Text color="gray.300" noOfLines={2}>{service.description}</Text>
              </Box>
            </VStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Services;
