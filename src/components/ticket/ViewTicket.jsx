import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import LoadingIndicator from "../indicators/LoadingIndicator";
import ErrorIndicator from "../indicators/ErrorIndicator";

const ViewTicket=()=> {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [err, setErr] = useState(false);
  const toast=useToast()

  async function fetchAndUpdateData(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://fake-ticket-server.onrender.com/tickets/${id}`,
      });

      let data = res.data;
      setLoading(false);
      setTicket(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    fetchAndUpdateData(id);
  }, [id]);

const deleteTicket=async()=> {
    try {
      let res = await axios({
        method: "delete",
        url: `https://fake-ticket-server.onrender.com/tickets/${id}`,
      });

      toast({
        title: 'Ticket Deleted.',
        description: "We've deleted your Your.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

      if (res.status === 200) {
        navigate("/tickets");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }

  const { title, description, assignee, status, priority } = ticket;
  return (
    <>
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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Assignee
              </Heading>
              <Text pt="2" fontSize="sm">
                {assignee}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <HStack spacing={4}>
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={() => {
                navigate(`/tickets/edit-ticket/${id}`);
              }}
            >
              Edit Ticket
            </Button>
            <Button variant="outline" colorScheme="teal" onClick={deleteTicket}>
              Delete Ticket
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
}

export default ViewTicket