import React, { useEffect } from "react";
import {
  CloseButton,
  Flex,
  Box,
  Button,
  HStack,
  VStack,
  useDisclosure,
  useColorModeValue,
  chakra,
  IconButton,
  useColorMode,
  Image,
  Text,
 
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "@/Redux/AuthReducer/action";
const Navbar = () => {
  const { isAuth, user } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const bg = useColorModeValue("red.100", "gray.300");
  const mobileNav = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={bg}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
      position={{ base: "relative" }}
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Home Page"
            display="flex"
            alignItems="center"
          ></chakra.a>
          <Link href="/">
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              <Image
                src="https://i.postimg.cc/JnwPSTW3/GOBEIL-copy.png"
                alt="logo"
                height={50}
              />
            </chakra.h1>
          </Link>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="red.500"
            display={{
              base: "none",
              lg: "inline-flex",
            }}
          >
            <a href="https://csb-zdeqxh.netlify.app/" target={"_blank"}>
            <Image src="https://tse3.mm.bing.net/th?id=OIP.g6maQkAQ4ODJ7bFSGJC_nAHaHa&pid=Api&P=0" height={12} marginRight={5} alt="" />
            </a>
            <Button
              onClick={toggleColorMode}
              rounded={"full"}
              bg={"white"}
              color={"red"}
              _hover={{
                bg: "red.100",
              }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>

            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/courses">
              <Button variant="ghost">Courses</Button>
            </Link>
          </HStack>
          {!isAuth ? (
            <Box>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="ghost">Sign up</Button>
              </Link>
            </Box>
          ) : (
            <Box gap={"1em"}>
              <Link href={"/"}>
                <Button
                  onClick={() => {
                    dispatch(signout());
                  }}
                  variant="solid"
                >
                  Logout
                </Button>
              </Link>
              {user?.role !== "student" ? (
                <Link href="admin">
                  <Button variant="solid">Admin</Button>
                </Link>
              ) : null}
            </Box>
          )}
          <Box
            display={{
              base: "inline-flex",
              lg: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                lg: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color=".800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
              zIndex="9999"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

<a href="https://csb-zdeqxh.netlify.app/" target={"_blank"}>
            <Image src="https://tse3.mm.bing.net/th?id=OIP.g6maQkAQ4ODJ7bFSGJC_nAHaHa&pid=Api&P=0" height={12} marginRight={5} alt="" />
            </a>
              <Button
                onClick={toggleColorMode}
                rounded={"full"}
                bg={"white"}
                color={"red"}
                _hover={{
                  bg: "red.100",
                }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost">Pricing</Button>
              </Link>
              <Link href="/notes">
                <Button variant="ghost">Notes</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/courses">
                <Button variant="ghost">Courses</Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="ghost">Sign Up</Button>
              </Link>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
