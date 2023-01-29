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
const videos = () => {
  const { isAuth, user } = useSelector((store) => store.AuthReducer);

  return (
    <Sidebar>
      {isAuth && user?.role !== "student" ? (
        <VideosTable />
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
const VideosTable = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const getAllUsers = () => {
    return axios.get("/api/videos").then((res) => res.data.videos);
  };
  useEffect(() => {
    getAllUsers().then((data) => {
      setVideos(data);
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
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {videos
            ? videos.map((course) => (
                <Tr key={course._id}>
                  <Td>{course.title}</Td>
                  <Td>
                    {course.createdBy ? course.createdBy.name : "User Deleted"}
                  </Td>
                  <Td>{course.isFree ? "FREE" : "PAID"}</Td>
                </Tr>
              ))
            : "No videos found"}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default videos;
