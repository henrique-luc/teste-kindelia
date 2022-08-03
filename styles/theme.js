import {
  extendTheme,
  theme as ChakraTheme,
  useColorModeValue,
} from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "inherit",
        backgroundColor: "#F4F4F5",
      },
    },
  },

  fonts: {
    heading: "inherit",
    body: "inherit",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },

  breakpoints: {
    md: "768px",
  },

  config,
});
