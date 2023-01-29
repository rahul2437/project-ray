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
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([]);
  console.log(users);
  const getAllUsers = () => {
    return axios.get("/api/users").then((res) => res.data.users);
  };
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

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
          {users
            ? users.map((user) => (
                <Tr key={user._id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.phone}</Td>
                </Tr>
              ))
            : "No users found"}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Users;
