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
  VisuallyHidden,
  IconButton,
  Avatar,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { AiFillBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <>
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
          <Flex alignItems="center" gap={3}>
            <Link href="/admin/users">
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Admin Dashboard
              </chakra.h1>
            </Link>

            <Box display={{ base: "none", md: "block" }}>
              <Link href="/admin/users">
                <Button variant="ghost">Users</Button>
              </Link>
              <Link href="/admin/courses">
                <Button variant="ghost">Courses</Button>
              </Link>
            </Box>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>

              <chakra.a
                p={3}
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                rounded="sm"
                _hover={{
                  color: "gray.800",
                  _dark: {
                    color: "gray.600",
                  },
                }}
              >
                <AiFillBell />
                <VisuallyHidden>Notifications</VisuallyHidden>
              </chakra.a>

              <Avatar size="sm" name="A D" src="" bg="blue.500" />
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
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

                <Link href="/admin/users">
                  <Button variant="ghost">Users</Button>
                </Link>
                <Link href="/admin/courses">
                  <Button variant="ghost">Courses</Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default AdminNavbar;
