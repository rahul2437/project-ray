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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ProgressLabel,
  Progress,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Login from "./Login/Login";
import { useDispatch, useSelector } from "react-redux";
// import { setSession } from "../redux/auth/action";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const Navbar = () => {
  // const { user } = useSelector((state) => state.auth);
  // const { data: session } = useSession();
  // const dispatch = useDispatch();
  const bg = useColorModeValue("red.100", "gray.300");
  const mobileNav = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();


//   useEffect(() => {
//     dispatch(setSession());
//   }, [dispatch]);

  return (
    <>
    
      <React.Fragment>
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
              >
              </chakra.a>
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
                <Button onClick={toggleColorMode}
               rounded={"full"}
               bg={"gray.500"}
               color={"white"}
               _hover={{
                 bg: "green.500",
               }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
                {/* <Link href="/referral">
                  <Button variant="ghost">
                    <BsGiftFill color="green" /> &nbsp; Refer
                  </Button>
                </Link> */}
                {/* {user?.courses?.length > 0 && (
                  <Menu variant="ghost">
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      onClick={session ? null : onOpen}
                    >
                      Progress
                    </MenuButton>
                    <MenuList>
                      {user?.courses?.map((course, index) => (
                        <Link
                          href={`/course/${course?.courseId.slug}/watch?video=1`}
                          key={index}
                        >
                          <MenuItem>{course?.courseId.title}</MenuItem>
                          <Progress
                            mx={3}
                            mt='1'
                            mb='4'
                            colorScheme="red"
                            value={(course?.completed.length * ((1/ course?.courseId.videos.length) * 100))}
                            size="lg"
                            rounded={10}
                          >
                            <ProgressLabel ml={2} fontSize={12} color={(course?.completed.length * ((1/course?.courseId.videos.length) * 100)).toFixed(2) > "50" ? "red" : "green"}>
                              {(course?.completed.length * ((1/course?.courseId.videos.length) * 100)).toFixed(2)}%
                            </ProgressLabel>
                          </Progress>
                        </Link>
                      ))}
                    </MenuList>
                  </Menu>
                )} */}
              </HStack>
              <Login />
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
                  <Button onClick={toggleColorMode}
               rounded={"full"}
               bg={"gray.500"}
               color={"white"}
               _hover={{
                 bg: "green.500",
               }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </React.Fragment>
    </>
  );
};

export default Navbar;


