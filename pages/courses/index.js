import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
const courses = () => {
  return (
    <div>
      <Navbar />
      <CoursesGrid />
    </div>
  );
};

const CoursesGrid = () => {
  const [courses, setCourse] = useState([]);
  console.log(courses);
  const getCourses = () => {
    return axios
      .get("http://localhost:3000/api/courses")
      .then((res) => res.data.courses);
  };

  useEffect(() => {
    getCourses().then((data) => {
      setCourse(data);
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto - fit, minmax(18em, 1fr))",
        padding: "2em",
      }}
    >
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          slug={course.slug}
          id={course._id}
          title={course.title}
          desc={course.description}
          img={course.thumbnail}
        />
      ))}
    </div>
  );
};

const CourseCard = ({ id, slug, title, desc, img }) => {
  return (
    <Link href={`/courses/${id}`}>
      <Card maxW="sm">
        <CardBody>
          <Image src={img} alt="Course Image" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{desc}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Enroll Now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default courses;
