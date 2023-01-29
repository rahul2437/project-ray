import React from "react";
import {
  Box,
  Grid,
  chakra,
  Divider,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/team";

const about = () => {
  return (
    <Box w="100%">
      <Navbar />
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        w="95%"
        // m="auto"
        mb="80px"
        gap={16}
      >
        {" "}
        <Box m="auto">
          <Image
            borderTopRightRadius={50}
            borderBottomRightRadius={2}
            borderBottomLeftRadius="50"
            borderTopLeftRadius={2}
            src="https://cdn.dribbble.com/users/1482796/screenshots/11163610/media/24482d28954cf2cad158512c7c62d51f.gif"
            alt="Typing"
          />
        </Box>
        <Box mt="160px">
          <Heading mb="30px">About us</Heading>
          <Text lineHeight={7} letterSpacing={1}>
            Tech education refers to the study and application of various
            technological tools, systems, and processes in order to acquire
            knowledge and skills needed to design, develop, and maintain
            technology-based products and services. This can include computer
            programming, web development, data analysis, and digital design,
            among other areas. Tech education can take place in formal
            educational settings, such as universities and vocational schools,
            or through online courses, bootcamps, and other training programs.
            The goal of tech education is to prepare students for careers in the
            technology industry or to use technology to enhance other fields.
          </Text>
        </Box>
      </Grid>

      <Heading
        as={"h1"}
        w="100%"
        fontSize="3xl"
        textAlign="center"
        fontWeight="700"
      >
        OUR TEAM
      </Heading>
      <Divider />
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        w="100%"
        mb="10px"
        justifyContent="center"
      >
        <Team
          image="https://avatars.githubusercontent.com/u/99896766?v=4"
          name="Ayush Chandra"
          role="Mern Developer"
          location="Kanpur Uttar Pradesh"
          email="ayushchandra.knp@gmail.com"
          linkedIn="https://www.linkedin.com/in/ayush-chandra-54315b202/"
        />
        <Team
          image="https://avatars.githubusercontent.com/u/48915605?v=4"
          name="Rahul Sheelavantar"
          role="Mern Developer"
          location="Belagavi, Karnatka "
          email="rahulsheelavantar@gmail.com"
          linkedIn="https://linkedin.com/in/rahulsheelavantar"
        />
        <Team
          image="https://avatars.githubusercontent.com/u/103126667?v=4"
          name="Yogesh Yadav"
          role="Mern Developer"
          location="Surat, Gujrat"
          email="yy072156@gmail.com"
          linkedIn="https://www.linkedin.com/in/yadav-yogesh-583471233/"
        />
      </Grid>
      <Footer />
    </Box>
  );
};

export default about;
