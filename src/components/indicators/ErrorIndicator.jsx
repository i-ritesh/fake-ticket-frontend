import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function ErrorIndicator() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something Went Wrong.
      </AlertDescription>
    </Alert>
  );
}

export default ErrorIndicator;
