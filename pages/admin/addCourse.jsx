import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import Sidebar from "./index";
import { useState } from "react";
import axios from "axios";

const initState = {
  title: "",
  slug: "",
  description: "",
  thumbnail: "",
  isFree: true,
};

export default function AddCourseCard() {
  const [form, setForm] = useState(initState);

  const handleFormChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({
      ...form,
      [key]: val,
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/courses/", JSON.stringify(form))
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Sidebar>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Add Course
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input
                      onChange={(e) => handleFormChange(e)}
                      name="title"
                      value={form.title}
                      type="text"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="slug" isRequired>
                    <FormLabel>Slug</FormLabel>
                    <Input
                      onChange={(e) => handleFormChange(e)}
                      name="slug"
                      value={form.slug}
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  onChange={(e) => handleFormChange(e)}
                  name="description"
                  value={form.description}
                  placeholder="Enter Course Description"
                />
              </FormControl>
              <FormControl
                onChange={(e) => handleFormChange(e)}
                name="thumbnail"
                value={form.thumbnail}
                id="thumb"
                isRequired
              >
                <FormLabel>Thumbnail Link</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="isFree" isRequired>
                <HStack>
                  <FormLabel>IsFree</FormLabel>
                  <Checkbox
                    onChange={(e) => handleFormChange(e)}
                    name="isFree"
                    value={form.isFree}
                  >
                    Checkbox
                  </Checkbox>
                </HStack>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleUpload}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Add Course
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Sidebar>
  );
}
