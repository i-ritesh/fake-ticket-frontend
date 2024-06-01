import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Flex,
  SimpleGrid,
  Select,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingIndicator from "../indicators/LoadingIndicator";
import ErrorIndicator from "../indicators/ErrorIndicator";
import TicketCard from "./TicketCard";

function Tickets() {
  const navigate = useNavigate();

  const [ticket, setTicket] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [sortOrderValue, setSortOrderValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const fetchTickets = async (sortOrderValue, filterStatus) => {
    setLoader(true);
    try {
      let res = await axios({
        method: "get",
        url: `https://fake-ticket-server.onrender.com/tickets/`,
      });

      let data = res.data;

      console.log(data);
      setLoader(false);
      setTicket(data);
    } catch (error) {
      setLoader(false);
      setErr(true);
    }
  };

  const sortAndFilter = () => {
    let filterTickets = [...ticket];

    if (filterStatus) {
      filterTickets = filterTickets.filter(
        (ticket) => ticket.status === filterStatus
      );
    }

    if (sortOrderValue) {
      filterTickets.sort((a, b) => {
        if (sortOrderValue === "asc") {
          return a.priority - b.priority;
        } else {
          return b.priority - a.priority;
        }
      });
    }
    return filterTickets
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  if (loader) {
    return <LoadingIndicator />;
  }
  if (err) {
    return <ErrorIndicator />;
  }

  let newTicket = sortAndFilter()

  return (
    <>
      <Container maxW="container.xl">
        <Flex direction="row-reverse">
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => {
              navigate("/tickets/create-ticket");
            }}
            marginY={8}
          >
            Create Ticket
          </Button>
        </Flex>
        <HStack my={4} spacing={4}>
          <Select
            placeholder="Sort by Priority"
            value={sortOrderValue}
            onChange={(e) => {
              setSortOrderValue(e.target.value);
            }}
          >
            <option value="asc">Low First</option>
            <option value="desc">High First</option>
          </Select>
          <Select
            placeholder="Filter by Status"
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
            }}
          >
            <option value="progress">Progress</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </Select>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {newTicket?.map((ticket) => (
            <TicketCard {...ticket} key={ticket.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Tickets;
