import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { isExpired, decodeToken } from "react-jwt";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/AuthReducer/action";

const initialState = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formstate, setFormstate] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;

    setFormstate({
      ...formstate,
      [name]: val,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(signin(formstate));

    if (formstate.email == "" || formstate.password == "") {
      toast({
        title: `Enter all details`,
        position: "top",
        isClosable: true,
        status: "warning",
        duration: 1000,
      });
    } else {
      let result = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(formstate),
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      console.log(data);

      if (data.message == "User not found") {
        toast({
          title: "Wrong password",
          description: "You need to enter correct password.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        localStorage.setItem("token", data.token);

        toast({
          title: "Login Successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        setTimeout(() => {
          let token = localStorage.getItem("token");
          const myDecodedToken = decodeToken(token);

          router.push("/#");
        }, 1000);
      }
      setFormstate(initialState);
    }
  }
  function loadingEffect() {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  useEffect(() => {
    loadingEffect();
  }, []);

  return (
    <>
      <Navbar />
      <Box pb="30px">
        {!loading && (
          <Box
            w="50%"
            m="auto"
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            mt="30px"
          >
            <VStack spacing={10} align="stretch">
              <Heading textAlign="center" color="red">
                Sign In
              </Heading>
              <hr />

              <Box textAlign="center">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <FormControl>
                    <Input
                      w={["100%", "90%", "80%", "60%"]}
                      type="text"
                      placeholder="Email"
                      borderBottom="2px solid orange"
                      value={formstate.email}
                      onChange={handleChange}
                      name="email"
                    />

                    <Input
                      mt="5"
                      w={["100%", "90%", "80%", "60%"]}
                      placeholder="Password"
                      borderBottom="2px solid orange"
                      value={formstate.password}
                      onChange={handleChange}
                      type="password"
                      name="password"
                    />

                    <Input
                      type="submit"
                      _hover={{
                        bg: "green",
                        cursor: "pointer",
                      }}
                      bg="red.600"
                      mt="10"
                      w="70%"
                      color="white"
                      placeholder="Submit form"
                    />
                  </FormControl>
                </form>
              </Box>
            </VStack>
            <br />

            <Text textAlign="center">
              Click Here To Create Account -- <Link href="signup">Signup</Link>
            </Text>
          </Box>
        )}
      </Box>
      {/* <Footer /> */}
    </>
  );
}
