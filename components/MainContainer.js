import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function MainContainer({ children }) {
  const ColorMode = useColorModeValue("#f4f4f5", "#000");

  return (
    <>
      <Navbar />
      <Box height="100%" width="100vw" bg={ColorMode}>
        {children}
      </Box>
    </>
  );
}
