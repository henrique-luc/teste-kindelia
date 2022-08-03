import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

export async function getStaticProps() {
  const data = await fetch("http://143.110.233.192:8000/blocks");

  const blocksData = await data.json();

  return {
    props: { blocksData: blocksData.data },
  };
}

export default function Blocks({ blocksData }) {
  return (
    <Center pt="100px">
      <TableContainer w={{ base: "90%", md: "60%" }} border="1px solid #1c1917">
        <Table variant="striped">
          <Thead>
            <Tr borderBottom="2px solid #1c1917">
              <Th>Block</Th>
              <Th w="90px" isNumeric>
                Hash
              </Th>
              <Th isNumeric>Mana</Th>
              <Th isNumeric>Space</Th>
              <Th isNumeric>Ctrs</Th>
              <Th isNumeric>Funs</Th>
              <Th isNumeric>Runs</Th>
            </Tr>
          </Thead>
          <Tbody>
            {blocksData.map((block, index) => (
              <NextLink key={index} href={`/blocks/${block.hash}`} passHref>
                <Tr cursor="pointer">
                  <Td maxWidth="30px" overflow="hidden">
                    #{block.height}
                  </Td>
                  <Td maxWidth="30px" overflow="hidden">
                    {block.hash}
                  </Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                </Tr>
              </NextLink>
            ))}
          </Tbody>
          <Tfoot>
            <Tr borderTop="2px solid #1c1917">
              <Th>Block</Th>
              <Th isNumeric>Hash</Th>
              <Th isNumeric>Mana</Th>
              <Th isNumeric>Space</Th>
              <Th isNumeric>Ctrs</Th>
              <Th isNumeric>Funs</Th>
              <Th isNumeric>Runs</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Center>
  );
}
