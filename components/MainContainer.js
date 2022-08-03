import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <Box height="100vh" width="100vw">
        {children}
      </Box>
    </>
  );
}
