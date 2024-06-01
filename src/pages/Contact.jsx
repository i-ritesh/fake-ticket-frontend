import React from "react";
import { Box, Container, Heading, Text, VStack, Button, Link, HStack } from "@chakra-ui/react";

function Contact() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="teal.500">
          Contact Us
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Have questions or feedback? Feel free to reach out to us using the information below.
        </Text>
        <VStack spacing={4} alignItems="flex-start">
          <ContactInfo text="ritesh@reelancer.in" />
          <ContactInfo text="+91 72182 18112" />
          <ContactInfo text="12 Nanded, Maharashtra, India" />
        </VStack>
        <Button 
          colorScheme="teal" 
          variant="solid"
          size="lg"
        >
          <Link href="mailto:ritesh@reelancer.in" textDecoration="none" color="white">
            Send Email
          </Link>
        </Button>
      </VStack>
    </Container>
  );
}

const ContactInfo = ({ text }) => (
  <Text fontSize="lg" color="gray.600">{text}</Text>
);

export default Contact;
