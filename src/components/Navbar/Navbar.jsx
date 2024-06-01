import React, { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Flex,useToast } from "@chakra-ui/react";
import { AuthContext } from "../../contextApi/AuthContextProvider";

function Navbar() {
  const { logout, authDetails } = useContext(AuthContext);
  const toast=useToast()

  const handleLogOut=()=>{
    logout()
    toast({
      title: 'Account Logout.',
      description: "We've logged out your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

  }

  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/contact",
      label: "Contact",
    },
    {
      to: "/tickets",
      label: "Tickets",
    },
    ...(authDetails.isLogedIn?[]:[{
      to:"/login",
      label:"Login"
    }])
  ];

  return (
    <Flex
      align="center"
      justify="space-around"
      backgroundColor="gray.200"
      padding={4}
    >
      {links.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
        
      ))}
      {authDetails.isLogedIn && (
        <Button onClick={handleLogOut} variant="outline" colorScheme="teal">
          LOGOUT
        </Button>
      )}
    </Flex>
  );
}

export default Navbar;
