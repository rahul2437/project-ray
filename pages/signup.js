import React, { useState } from "react";

import {
  Box,
  Button,
  useToast,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/AuthReducer/action";

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
  phone: "",
};

export default function SignUp() {
  const [formstate, setFormstate] = useState(initialState);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleClickPassword = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  function postData() {
    console.log(formstate);
    dispatch(signup(formstate));
    if (
      formstate.email == "" ||
      formstate.password == "" ||
      formstate.role == "" ||
      formstate.name == "" ||
      formstate.phone == ""
    ) {
      toast({
        title: `Enter all details`,
        position: "top",
        isClosable: true,
        status: "warning",
        duration: 1000,
      });
    } else {
      axios({
        method: "POST",
        url: `/api/users/signup`,
        data: formstate,
      });
      toast({
        title: "Account created Successfully",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setFormstate(initialState);
      router.push("/login");
    }
  }

  return (
    <>
      <Navbar />
      <Box
        w="50%"
        m="auto"
        mb="30px"
        boxShadow="lg"
        p="6"
        rounded="md"
        bg="white"
        mt="30px"
      >
        <VStack spacing={10} align="stretch">
          <Heading textAlign="center" color="red">
            Sign Up
          </Heading>
          <hr />
          <Stack direction={["column", "column", "row"]} spacing="120px">
            <Box w={["100%", "90%", "50%"]} m="auto" textAlign="center">
              <VStack spacing={10} align="stretch">
                <Input
                  type="text"
                  placeholder="Name"
                  borderBottom="2px solid orange"
                  value={formstate.name}
                  onChange={handleChange}
                  name="name"
                />

                <Input
                  type="text"
                  placeholder="Email Address"
                  borderBottom="2px solid orange"
                  value={formstate.email}
                  onChange={handleChange}
                  name="email"
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  borderBottom="2px solid orange"
                  value={formstate.phone}
                  onChange={handleChange}
                  name="phone"
                />

                <Select
                  placeholder="Select type"
                  name="role"
                  value={formstate.role}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </Select>

                <InputGroup size="md">
                  <Input
                    borderBottom="2px solid orange"
                    value={formstate.password}
                    onChange={handleChange}
                    name="password"
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClickPassword}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </Box>
          </Stack>

          <Box m="auto" textAlign="center">
            <Button
              w="35%"
              colorScheme="red"
              _hover={{
                bg: "green",
                cursor: "pointer",
              }}
              onClick={postData}
            >
              {" "}
              Join{" "}
            </Button>
          </Box>
        </VStack>
        <br />
        <Text textAlign="center">
          Already have an account? <Link href="login">Login</Link>
        </Text>
      </Box>
    </>
  );
}
