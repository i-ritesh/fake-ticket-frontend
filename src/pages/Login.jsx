import React, { useState, useContext } from "react";
import {
  useToast,
  Button,
  Heading,
  Input,
  VStack,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../contextApi/AuthContextProvider";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const { login, authDetails } = useContext(AuthContext);
  const toast = useToast();

  const handleLoginChange = async () => {
    try {
      let req = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password,
        },
      });
      login(req.data.token);

      toast({
        title: "Account LoggedIn.",
        description: "We've LoggedIn your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (authDetails.isLogedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container maxW={"600px"}>
        <VStack spacing={6}>
          <Heading as="h1" size="xl">
            Login
          </Heading>

          <p>
            For authenticaion i used fake api by Reqres.in <br />
            email: eve.holt@reqres.in, password: cityslicka
          </p>

          <Input
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={handleLoginChange}
          >
            Login In
          </Button>
        </VStack>
      </Container>
    </>
  );
}

export default Login;
