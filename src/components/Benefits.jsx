import { Box, SimpleGrid, Icon, Text, Heading, VStack } from '@chakra-ui/react';
import { GiSolarPower, GiMoneyStack, GiHouse } from 'react-icons/gi';
import { MdOutlineSavings, MdOutlineEco, MdHealthAndSafety } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';

const benefitsData = [
  {
    icon: GiSolarPower,
    title: 'Renewable Energy Source',
    description: "Solar power is a truly renewable energy source that's available every day worldwide."
  },
  {
    icon: MdOutlineSavings,
    title: 'Reduce Electricity Bills',
    description: 'Generate your own energy and significantly reduce your monthly electricity bills.'
  },
  {
    icon: MdOutlineEco,
    title: 'Low Environmental Impact',
    description: 'Solar energy has the least negative impact on the environment compared to any other energy source.'
  },
  {
    icon: GiMoneyStack,
    title: 'Financial Incentives',
    description: 'Take advantage of government subsidies, solar rebates, and tax reductions.'
  },
  {
    icon: AiOutlineFieldTime,
    title: 'Energy Independence',
    description: 'Decrease your dependence on fossil fuels and foreign oil.'
  },
  {
    icon: FaHandsHelping,
    title: 'Community Support',
    description: 'Join a growing community of green energy supporters and help lead the way to a cleaner future.'
  },
  {
    icon: MdHealthAndSafety,
    title: 'Health Benefits',
    description: 'Improve your health with better air quality, water quality, and a reduced dependency on nonrenewable energy.'
  },
  {
    icon: GiHouse,
    title: 'Increase Property Value',
    description: 'Homes with solar energy systems have higher property values and sell more quickly.'
  },
];

const BenefitItem = ({ icon, title, description }) => {
  return (
    <VStack spacing={3} alignItems="center">
      <Icon as={icon} w={10} h={10} color="gold" />
      <Heading as="h3" size="md" color="gold">{title}</Heading>
      <Text color="gray.300">{description}</Text>
    </VStack>
  );
};

const Benefits = () => {
  return (
    <Box id="benefits"  w="full"
    py={10}
    px={{ base: 4, md: 16 }}
    bgImage="url('bg.jpg')" // Update with your image path
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    color="white">
      <Heading as="h2" size="xl" color="gold" textAlign="center" mb={10}>
        The Benefits of Solar Energy
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {benefitsData.map((benefit, index) => (
          <BenefitItem key={index} {...benefit} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Benefits;
