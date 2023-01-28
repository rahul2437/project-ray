import React from "react";
import { Box, Flex, Image, Text, HStack } from "@chakra-ui/react";

import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Team = ({ image, name, role, location, email, linkedIn }) => {
  return (
    <Flex
      _dark={{
        bg: "#3e3e3e",
      }}
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        shadow="lg"
        rounded="lg"
        bg=""
        _dark={{
          bg: "gray.800",
        }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="300px"
      >
        <Flex
          bg="#ffbabd"
          _dark={{
            bg: "#3e3e3e",
          }}
       
      
          height="100%"
          width="100%"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          p={8}
 
          alignItems="left"
        >
          <Image
            src={image}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="2.5px solid"
            objectFit="contain"
            mb={-20}
            borderColor="gray.800"
            _dark={{
              borderColor: "gray.200",
            }}
          />
        </Flex>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            {name}
          </Text>
          <HStack
            spacing={3}
            color="gray.800"
            _dark={{
              color: "gray.200",
            }}
          >
         
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              {role}
            </Text>
          </HStack>
          <HStack
            spacing={3}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
          
            <Text fontSize="lg">{location}</Text>
          </HStack>
          <HStack
            spacing={3}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
      
            <Text fontSize="lg">{email}</Text>
          </HStack>
          <Box fontSize="2xl" mt="15px" color="#0a7caa">
            <Link href={linkedIn} target="_blank" rel="noreferrer">
              <BsLinkedin />
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Team;
