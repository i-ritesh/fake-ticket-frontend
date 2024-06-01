
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const TicketCard = ({ id, title, status, priority }) => {
    const navigate = useNavigate()
    return (
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
  
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              <Text pt="2" fontSize="sm">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Priority
              </Heading>
              <Text pt="2" fontSize="sm">
                {priority}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant="outline" colorScheme="teal" onClick={()=>{navigate(`/tickets/view-ticket/${id}`)}}>
            View Ticket
          </Button>
        </CardFooter>
      </Card>
    );
  };

export default TicketCard