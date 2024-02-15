import React from 'react';
import { 
  Box, SimpleGrid, VStack, Text, Heading, Button, List, ListItem, ListIcon 
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

// Mock data for payment plans
const paymentPlansData = [
  {
    title: 'Basic',
    price: '$99',
    period: 'month',
    features: [
      'Energy Audit',
      'System Design',
      '24/7 Customer Support',
      'Maintenance Service',
    ],
    mostPopular: false,
  },
  {
    title: 'Standard',
    price: '$199',
    period: 'month',
    features: [
      'Everything in Basic',
      'Increased Energy Output',
      'Priority Support',
      'Free System Upgrade',
    ],
    mostPopular: true,
  },
  {
    title: 'Premium',
    price: '$299',
    period: 'month',
    features: [
      'Everything in Standard',
      'Custom Energy Solutions',
      'Extended Warranty',
      'Smart Monitoring',
    ],
    mostPopular: false,
  },
  // Add more plans if necessary
];

const PaymentPlanCard = ({ title, price, period, features, mostPopular }) => {
  return (
    <VStack
    p={5}
    rounded="xl"
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(10px)"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    border="1px solid rgba(255, 255, 255, 0.2)"
    position="relative"
    _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
    transition="background-color 0.3s"
    >
      {mostPopular && (
        <Text
          position="absolute"
          top="-16px"
          right="16px"
          px={3}
          py={1}
          bg="yellow.400"
          color="black"
          fontSize="sm"
          fontWeight="bold"
          rounded="md"
        >
          Most Popular
        </Text>
      )}
      <Heading as="h4" size="md" color="gold">{title}</Heading>
      <Text color="white" fontSize="2xl" fontWeight="bold">{`${price}/${period}`}</Text>
      <List spacing={2} alignSelf="stretch" color="gray.300">
        {features.map((feature, index) => (
          <ListItem key={index} fontWeight="semibold">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {feature}
          </ListItem>
        ))}
      </List>
      <Button w="full" colorScheme="yellow" mt={4} variant="solid">
        Choose {title}
      </Button>
    </VStack>
  );
};

const PaymentPlans = () => {
  return (
    <Box id="payment-plans" w="full" py={10} px={6} bg="black">
      <Heading as="h2" size="xl" color="gold" textAlign="center" mb={10}>
        Payment Plans
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {paymentPlansData.map((plan, index) => (
          <PaymentPlanCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PaymentPlans;
