import React from "react";
import { Box, Button, Container, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        
        <Heading as="h1" size="2xl" color="teal.500">
          Welcome to Ticket Manager
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Your one-stop solution for managing all your tickets efficiently and effectively.
        </Text>
        <HStack spacing={4}>
          <Button as={Link} to="/tickets" colorScheme="teal" variant="solid">
            View Tickets
          </Button>
          <Button as={Link} to="/tickets/create-ticket" colorScheme="teal" variant="outline">
            Create a Ticket
          </Button>
        </HStack>
        <Box py={10}>
          <Heading as="h2" size="lg" mb={4}>
            Explore Our Features
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Manage your tickets with ease using our intuitive platform. Whether you need to create new tickets, view existing ones, or edit them, our platform offers all the functionality you need.
          </Text>
        </Box>
        
      </VStack>
    </Container>
  );
}

export default Home;
