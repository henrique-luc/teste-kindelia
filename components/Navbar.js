import {
  Image,
  Button,
  Box,
  List,
  ListItem,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Switch,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

import { FaMoon, FaSun } from "react-icons/fa";

import { useRef } from "react";

import NextLink from "next/link";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);
  const ColorMode = useColorModeValue("#f4f4f5", "#000");

  return (
    <Box
      bg={ColorMode}
      boxShadow="0px 5px 5px -2px  #DDDDDE"
      padding="13px"
      position="fixed"
      w="100%"
      display="flex"
      justifyContent="space-between"
      zIndex={1}
    >
      <Box display={{ base: "none", md: "flex" }} ml="60px" alignItems="center">
        <NextLink href="/" passHref>
          <Link>
            <Image
              src="/images/logo.svg"
              alt="logo"
              boxSize="30px"
              cursor="pointer"
            />
          </Link>
        </NextLink>

        <List display="flex" ml="20px">
          <ListItem>
            <NextLink href="/interact" passHref>
              <Link _hover={{ textDecor: "none" }}>
                <Button bg="transparent">Interact</Button>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/blocks" passHref>
              <Link _hover={{ textDecor: "none" }}>
                <Button bg="transparent">Blocks</Button>
              </Link>
            </NextLink>
          </ListItem>

          <ListItem>
            <NextLink href="/functions" passHref>
              <Link _hover={{ textDecor: "none" }}>
                <Button bg="transparent">Functions</Button>
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Box>

      <Box display={{ base: "none", md: "flex" }} alignItems="center">
        <Stack spacing={4} mr="20px" w="350px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="#1C1917" />}
            />
            <Input
              bg="#D4D4D8"
              border="none"
              focusBorderColor="black"
              type="text"
              placeholder="Search"
              _placeholder={{ color: "#1C1917" }}
            />
          </InputGroup>
        </Stack>

        <Menu isLazy>
          <MenuButton
            fontSize="sm"
            fontWeight="500"
            border="1px solid #1C1917"
            borderRadius="7px"
            p="2px 30px"
            mr="10px"
          >
            Default
          </MenuButton>
          <MenuList border="1px solid #1c1917">
            <MenuItem _hover={{ bg: "#D4D4D8" }}>Default</MenuItem>
            <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-1</MenuItem>
            <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-2</MenuItem>
            <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-3</MenuItem>
            <MenuItem _hover={{ bg: "#D4D4D8" }}>localhost:8000</MenuItem>
          </MenuList>
        </Menu>

        <Stack mr="20px">
          <IconButton
            icon={<SwitchIcon />}
            onClick={toggleColorMode}
          ></IconButton>
        </Stack>

        <Menu isLazy>
          <MenuButton mr="60px">
            <Image
              src="images/amostra.webp"
              boxSize="30px"
              borderRadius="100%"
            ></Image>
          </MenuButton>
          <MenuList>
            <MenuItem>0x266...c92c</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        m="0 auto"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
      >
        <NextLink href="/" passHref>
          <Link>
            <Image
              src="/images/logo.svg"
              alt="logo"
              boxSize="45px"
              cursor="pointer"
            />
          </Link>
        </NextLink>

        <Box position="fixed" left="87%">
          <Button
            leftIcon={<HamburgerIcon boxSize="2em" />}
            onClick={onOpen}
            bg="transparent"
            ref={btnRef}
          ></Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton size={8} m="10px" />

              <DrawerBody
                mt="10px"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Stack w="30px">
                  <IconButton
                    icon={<SwitchIcon />}
                    onClick={toggleColorMode}
                  ></IconButton>
                </Stack>

                <List
                  display="flex"
                  w="100%"
                  justifyContent="space-between"
                  mt="30px"
                >
                  <ListItem>
                    <NextLink href="/interact" passHref>
                      <Link _hover={{ textDecor: "none" }}>
                        <Button
                          bg="transparent"
                          border="1px solid #1c1917"
                          p="10px"
                        >
                          Interact
                        </Button>
                      </Link>
                    </NextLink>
                  </ListItem>

                  <ListItem>
                    <NextLink href="/blocks" passHref>
                      <Link _hover={{ textDecor: "none" }}>
                        <Button
                          bg="transparent"
                          border="1px solid #1c1917"
                          p="10px"
                        >
                          Blocks
                        </Button>
                      </Link>
                    </NextLink>
                  </ListItem>

                  <ListItem>
                    <NextLink href="/functions" passHref>
                      <Link _hover={{ textDecor: "none" }}>
                        <Button
                          bg="transparent"
                          border="1px solid #1c1917"
                          p="10px"
                        >
                          Functions
                        </Button>
                      </Link>
                    </NextLink>
                  </ListItem>
                </List>

                <Stack spacing={4} mt="20px" w="100%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<SearchIcon color="#1C1917" />}
                    />
                    <Input
                      bg="#D4D4D8"
                      border="none"
                      focusBorderColor="black"
                      type="text"
                      placeholder="Search"
                      _placeholder={{ color: "#1C1917" }}
                    />
                  </InputGroup>
                </Stack>

                <Menu isLazy>
                  <MenuButton
                    fontSize="sm"
                    fontWeight="500"
                    border="1px solid #1C1917"
                    borderRadius="7px"
                    p="2px 30px"
                    w="100%"
                    mt="20px"
                  >
                    Default
                  </MenuButton>
                  <MenuList border="1px solid #1c1917">
                    <MenuItem _hover={{ bg: "#D4D4D8" }}>Default</MenuItem>
                    <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-1</MenuItem>
                    <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-2</MenuItem>
                    <MenuItem _hover={{ bg: "#D4D4D8" }}>kf-node-3</MenuItem>
                    <MenuItem _hover={{ bg: "#D4D4D8" }}>
                      localhost:8000
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Menu isLazy>
                  <MenuButton mt="70px">
                    <Image
                      src="images/amostra.webp"
                      boxSize="100px"
                      borderRadius="100%"
                    ></Image>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>0x266...c92c</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
