import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
} from "@chakra-ui/react";

export default function Blocks() {
  return (
    <Center pt="100px">
      <TableContainer w={{ base: "90%", md: "60%" }} border="1px solid #1c1917">
        <Table variant="striped">
          <Thead>
            <Tr borderBottom="2px solid #1c1917">
              <Th>Block</Th>
              <Th>Hash</Th>
              <Th isNumeric>Mana</Th>
              <Th isNumeric>Space</Th>
              <Th isNumeric>Ctrs</Th>
              <Th isNumeric>Funs</Th>
              <Th isNumeric>Runs</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#170542</Td>
              <Td>0xfffff9</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
            </Tr>
            <Tr>
              <Td>#170542</Td>
              <Td>0xfffff9</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
            </Tr>
            <Tr>
              <Td>#170542</Td>
              <Td>0xfffff9</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
            </Tr>
            <Tr>
              <Td>#170542</Td>
              <Td>0xfffff9</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
              <Td isNumeric>0</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr borderTop="2px solid #1c1917">
              <Th>Block</Th>
              <Th>Hash</Th>
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
