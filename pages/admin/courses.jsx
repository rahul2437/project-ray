import {
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./index";
const courses = () => {
  const { isAuth, user } = useSelector((store) => store.AuthReducer);

  return (
    <Sidebar>
      {isAuth && user?.role !== "student" ? (
        <CoursesTable />
      ) : (
        <VStack bg={"#efefef"} p={"1rem"} boxShadow={"2xl"} align={"center"}>
          <Text fontSize={"3xl"} bg={"#efefef"} p={"1rem"} align={"center"}>
            Please Login
          </Text>
          <Link href={"/login"}>
            <Text color={"blue.300"}>Login</Text>
          </Link>
        </VStack>
      )}
    </Sidebar>
  );
};

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  const getAllUsers = () => {
    return axios.get("/api/courses").then((res) => res.data.courses);
  };
  useEffect(() => {
    getAllUsers().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Thumbnail</Th>
            <Th>CreatedBy</Th>
            <Th>Total Video</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses
            ? courses.map((course) => (
                <Tr key={course._id}>
                  <Td>{course.title}</Td>
                  <Td>
                    <Image
                      width={100}
                      src={course.thumbnail}
                      alt="ImageThumb"
                    />
                  </Td>
                  <Td>
                    {course.createdBy ? course.createdBy.name : "User Deleted"}
                  </Td>
                  <Td>{course.videos.length}</Td>
                  <Td>{course.isFree ? "FREE" : "PAID"}</Td>
                  <Td>
                    <AddVideoModal cid={course._id} />
                  </Td>
                </Tr>
              ))
            : "No courses found"}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const addVideoState = {
  title: "",
  source: "",
  description: "",
  duration: "",
};

function AddVideoModal({ cid }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const { user } = useSelector((store) => store.AuthReducer);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [form, SetForm] = useState(addVideoState);

  const handleFormChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    SetForm({
      ...form,
      [key]: val,
    });
  };

  const PostVideo = (e) => {
    e.preventDefault();
    form.teacher = user._id;
    form.course = cid;
    axios
      .post("/api/videos", form)
      .then((res) => {
        if (res.data.message == "Video created") {
          return toast({
            title: res.data.message,
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        }
        return toast({
          title: res.data.message,
          status: "warning",
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        return toast({
          title: res.data.message,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Add Video</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                onChange={(e) => handleFormChange(e)}
                value={form.name}
                name="title"
                ref={initialRef}
                placeholder="Video Title"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Source Link</FormLabel>
              <Input
                onChange={(e) => handleFormChange(e)}
                value={form.source}
                name="source"
                placeholder="Link"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(e) => handleFormChange(e)}
                value={form.description}
                name="description"
                placeholder="Details"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                onChange={(e) => handleFormChange(e)}
                value={form.duration}
                name="duration"
                placeholder="Duration"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={PostVideo} colorScheme="blue" mr={3}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default courses;
