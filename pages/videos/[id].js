import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const Video = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Navbar />
      <VideoPlayer />
    </div>
  );
};

const VideoPlayer = () => {
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(video?.src);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const getCourse = () => {
    return axios.get(`/api/videos/${id}`).then((res) => res.data);
  };

  useEffect(() => {
    setLoading(true);
    getCourse().then((data) => {
      setVideo(data.video);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return ".....LOADING PAGE";
  }
  if (!video) {
    return "ERROR LOADING PAGE";
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <AspectRatio maxW="90%" ratio={16 / 9}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/mTz0GXj8NN0"
            allowFullScreen
          />
        </AspectRatio>
      </SimpleGrid>
    </Container>
  );
};

export default Video;
