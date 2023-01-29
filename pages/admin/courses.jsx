import {
  Image,
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
const courses = () => {
  return (
    <Sidebar>
      <CoursesTable />
    </Sidebar>
  );
};

const CoursesTable = () => {
  const [courses, setCourses] = useState([]);
  console.log(courses);
  const getAllUsers = () => {
    return axios
      .get("http://localhost:3000/api/courses")
      .then((res) => res.data.courses);
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
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses
            ? courses.map((course) => (
                <Tr>
                  <Td>{course.title}</Td>
                  <Td>
                    <Image width={100} src={course.thumbnail} />
                  </Td>
                  <Td>
                    {course.createdBy ? course.createdBy.name : "User Deleted"}
                  </Td>
                  <Td>{course.isFree ? "FREE" : "PAID"}</Td>
                </Tr>
              ))
            : "No courses found"}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default courses;
