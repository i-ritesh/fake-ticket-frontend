import React from "react";
import { Box, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.500">
          About Us
        </Heading>
        <Text fontSize="xl" color="gray.600">
          We are a team dedicated to providing the best ticket management solution for our users.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Our mission is to simplify the process of ticket management and improve efficiency for businesses and individuals alike.
          </Text>
        </Box>
       
        
      </VStack>
    </Container>
  );
}

export default About;
