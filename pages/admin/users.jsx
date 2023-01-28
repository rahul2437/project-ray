import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./index";
const Users = () => {
  return (
    <div>
      <Sidebar>
        <UserTable />
      </Sidebar>
    </div>
  );
};

const UserTable = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Users;
