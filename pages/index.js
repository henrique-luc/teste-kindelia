import {
  Image,
  Box,
  Center,
  Button,
  Heading,
  Text,
  Link,
  Input,
} from "@chakra-ui/react";

import {
  FaBook,
  FaGithub,
  FaDiscord,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

import { AiFillStar, AiFillRedditCircle } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Center
        pt="100px"
        flexDir="column"
        w={{ base: "100%", md: "60%" }}
        m="0 auto"
        pb="30px"
        justifyContent="center"
      >
        <Box m="40px auto" display="flex" flexDirection="column">
          <Image src="images/logo.svg" alt="Logo" boxSize="170px" mb="20px" />
          <Button
            border="1px solid #1c1917"
            bg="transparent"
            w="160px"
            m="0 auto"
            p="23px 0"
            fontWeight="300"
            color="#1c1917"
          >
            Explore kindelia
          </Button>
        </Box>

        <Box
          display="flex"
          flexDir="column"
          justifyContent="center"
          w={{ base: "80%", md: "100%" }}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box mt={{ base: "20px", md: "0" }}>
              <Heading fontSize="lg" w={{ base: "100%", md: "90%" }}>
                Cheap state and computation
              </Heading>
              <Text w={{ base: "100%", md: "90%" }} textAlign="justify">
                By storing the global state as reversible runtime heaps, it can
                run highly dynamic applications with massively reduced costs,
                making layer 1 virtual worlds economically viable.
              </Text>
            </Box>

            <NextLink href="https://github.com/Kindelia/HVM" passHref>
              <Link
                border="1px solid #1c1917"
                borderRadius="10px"
                p="20px 20px"
                w={{ base: "300px", md: "450px" }}
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textDecor="none"
                isExternal
                _hover={{ textDecor: "none" }}
              >
                <Box display="flex" alignItems="center" mb="10px" width="100%">
                  <FaBook />
                  <Heading ml="10px" fontSize="lg">
                    Kindelia/HVM
                  </Heading>
                </Box>

                <Text fontSize="sm" mb="10px">
                  A massively parallel, optimal functional runtime in Rust
                </Text>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  w="80%"
                  fontSize="sm"
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      w="5px"
                      height="5px"
                      bg="darkred"
                      borderRadius="100%"
                    ></Box>
                    <Text ml="3px">Rust</Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <AiFillStar />
                    <Text ml="3px">4895</Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <TbGitFork />
                    <Text ml="3px">149</Text>
                  </Box>
                </Box>
              </Link>
            </NextLink>
          </Box>

          <Box
            w="100%"
            display="flex"
            alignItems="center"
            flexDir={{ base: "column", md: "row" }}
            mt={{ base: "40px", md: "0" }}
          >
            <NextLink href="https://github.com/Kindelia/Kind" passHref>
              <Link
                border="1px solid #1c1917"
                borderRadius="10px"
                p="20px 20px"
                w={{ base: "300px", md: "450px" }}
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                isExternal
                _hover={{ textDecor: "none" }}
              >
                <Box display="flex" alignItems="center" mb="10px" width="100%">
                  <FaBook />
                  <Heading ml="10px" fontSize="lg">
                    Kindelia/Kind
                  </Heading>
                </Box>

                <Text fontSize="sm" mb="10px">
                  A modern proof language
                </Text>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  w="80%"
                  fontSize="sm"
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      w="5px"
                      height="5px"
                      bg="purple"
                      borderRadius="100%"
                    ></Box>
                    <Text ml="3px">Kind</Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <AiFillStar />
                    <Text ml="3px">2552</Text>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <TbGitFork />
                    <Text ml="3px">104</Text>
                  </Box>
                </Box>
              </Link>
            </NextLink>

            <Box ml={{ base: "0", md: "30px" }} mt={{ base: "20px", md: "0" }}>
              <Heading fontSize="lg">0-bug contracts</Heading>
              <Text w={{ base: "100%", md: "90%" }} textAlign="justify">
                By leveraging a functional virtual machine, the HVM, Kendelia is
                able to run formally verified DApps cheaply and efficiently,
                making it the most secure peer-to-peer computer.
              </Text>
            </Box>
          </Box>
        </Box>

        <Center mt="30px" flexDirection="column">
          <Text mb="30px">Keep up with our latest news and events.</Text>

          <Box
            display="flex"
            alignItems="center"
            mb="50px"
            flexDir={{ base: "column", md: "row" }}
            w="100%"
          >
            <Input
              type="email"
              placeholder="Email Address"
              border="none"
              bg="#fff"
              borderRadius="5px"
              mr={{ base: "0", md: "20px" }}
              h="35px"
              w={{ base: "100%", md: "350px" }}
            ></Input>
            <Button
              color="#fff"
              bg="#0D314D"
              p="0 40px"
              h="35px"
              mt={{ base: "10px", md: "0" }}
              _hover={{ backgroundColor: "#081D2E" }}
            >
              SUBSCRIBE
            </Button>
          </Box>

          <Center flexDirection="column">
            <Heading fontWeight="400" fontSize="xl" mb="10px">
              Join Us
            </Heading>
            <Box display="flex" justifyContent="space-around" w="200px">
              <NextLink href="" passHref>
                <Link>
                  <FaGithub size={20} />
                </Link>
              </NextLink>
              <NextLink href="" passHref>
                <Link>
                  <FaDiscord size={20} />
                </Link>
              </NextLink>
              <NextLink href="" passHref>
                <Link>
                  <FaTelegram size={20} />
                </Link>
              </NextLink>
              <NextLink href="" passHref>
                <Link>
                  <FaTwitter size={20} />
                </Link>
              </NextLink>
              <NextLink href="" passHref>
                <Link>
                  <AiFillRedditCircle size={20} />
                </Link>
              </NextLink>
            </Box>
          </Center>
        </Center>
      </Center>
    </>
  );
}
