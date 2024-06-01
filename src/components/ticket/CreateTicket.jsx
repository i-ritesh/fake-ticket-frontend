import {
  Button,
  Container,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState();

  const navigate = useNavigate()

  const createTicket = async () => {
    try {
      const newTicket = {
        title,
        description,
        assignee,
        status,
        priority,
      };

      let res = await axios({
        method: "post",
        url: "https://fake-ticket-server.onrender.com/tickets",
        data: newTicket,
      });

      if(res.status===201){
        navigate("/tickets")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <VStack spacing={8} my={4}>
        <Input
          placeholder="Enter Title"
          size="lg"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Textarea
          placeholder="Enter Description"
          size="lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Select
          placeholder="Assignee"
          size="lg"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option value="Neha">Neha</option>
          <option value="Amit">Amit</option>
          <option value="Raj">Raj</option>
          <option value="Vikram">Vikram</option>
          <option value="Sara">Sara</option>
        </Select>

        <Select
          placeholder="Status"
          size="lg"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>

        <Select
          placeholder="Priority"
          size="lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
        <Button
          variant="outline"
          colorScheme="teal"
          size="lg"
          onClick={createTicket}
        >
          Create Ticket
        </Button>
      </VStack>
    </Container>
  );
}

export default CreateTicket;
