import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Link from "next/link";
const Singlepage = () => {
  return (
    <div>
      <Navbar />
      <Course />
    </div>
  );
};

const Course = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(course);
  const router = useRouter();
  const { id } = router.query;
  const getCourse = () => {
    return axios.get(`/api/courses/${id}`).then((res) => res.data);
  };

  useEffect(() => {
    setLoading(true);
    getCourse().then((data) => {
      if (!data) {
        setError(true);
        setLoading(false);
      } else {
        setCourse(data.course);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return ".....LOADING PAGE";
  }
  if (error) {
    return "ERROR LOADING PAGE";
  }
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={course.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {course.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {course.isFree ? "Free" : "Paid"}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {course.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Videos
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {course?.videos?.map((video) => (
                  <VideoCard
                    key={video._id}
                    id={video.videoID._id}
                    title={video.videoID.title}
                    description={video.videoID.description}
                    duration={video.videoID.duration}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

const VideoCard = ({ id, title, description, duration }) => {
  return (
    <Link href={`/videos/${id}`}>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Singlepage;
