import React from "react";
import {
  useColorModeValue,
  Flex,
  Box,
  Text,
  chakra,
  Stack,
  SimpleGrid,
  Feature,
  Button,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { IoCheckmark } from "react-icons/io5";
import PaymentCard from "./PaymentCard";

const Price = () => {
  const topBg = useColorModeValue("red.100", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{
            color: "red.500",
          }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p
          fontSize="lg"
          color="red.600"
          _dark={{
            color: "red.400",
          }}
          {...props}
        />
      </Flex>
    );
  };

  return (
    <Box bg="#edf3f8">
      <Box
        _dark={{
          bg: "gray.200",
        }}
        p={10}
        py="24"
        mx={{ base: "4", md: "10", lg: "20", xl: "32" }}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          mb={2}
          fontSize="4xl"
          fontWeight="seminormal"
          lineHeight="tight"
          bgGradient="linear(to-r, red.300, orange.600)"
          bgClip="text"
          textAlign="center"
        >
          Pricing Base on Duration.
        </Text>
        <chakra.p
          mb={6}
          fontSize={["lg", , "xl"]}
          color="red.600"
          _dark={{
            color: "red.400",
          }}
          textAlign="center"
        >
          If youre not satisfied, contact us and we will refund your money in 7
          working Day. Till First month of starting you account.
        </chakra.p>
        <Box w="full" pt={8}>
          <Flex
            direction={{
              base: "column",
              md: "row",
            }}
            justifyContent="center"
            mb={{
              base: 6,
              sm: 0,
            }}
          >
            <Flex
              flex={{
                sm: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.3 / 7,
              }}
              rounded="lg"
              borderTopRightRadius={0}
              borderBottomLeftRadius="lg"
              bg="red.50"
              _dark={{
                bg: "red.700",
              }}
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Entry Lavel
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹99
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "gray.400",
                    }}
                  >
                    /1 Year
                  </chakra.span>
                </HStack>
                {/* <Text fontSize="sm" color="red.500" _dark={{ color: "red.400" }} fontWeight='600'>*Or refer 3 friends</Text> */}
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="red.100"
                _dark={{
                  bg: "gray.800",
                }}
                borderBottomLeftRadius="lg"
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Get Unlimited Videos</Feature>
                  <Feature>100% Refundable </Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  <PaymentCard month="3" />
                  {/* </Button> */}
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{
                base: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.4 / 7,
              }}
              rounded="lg"
              bg="gray.50"
              _dark={{
                bg: "gray.700",
              }}
              mt={{
                base: 4,
                sm: -4,
              }}
              shadow="xl"
              zIndex={30}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Advance Lavel
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹199
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "red.400",
                    }}
                  >
                    /5 Year
                  </chakra.span>
                </HStack>
                {/* <Text fontSize="sm" color="red.500" _dark={{ color: "red.400" }} fontWeight='600'>*Or refer 12 friends</Text> */}
              </VStack>
              <VStack
                fontSize="sm"
                h="full"
                roundedBottom="lg"
                spacing={8}
                bg="red.100"
                _dark={{
                  bg: "gray.800",
                }}
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Get Unlimited Videos </Feature>
                  <Feature>One-One Mentorship</Feature>
                  <Feature>100% Refundable</Feature>
                  <Feature>Limited 24/7 Ticket Support</Feature>
                </VStack>
                <Box display="inline-flex" rounded="md" shadow="md" w="full">
                  <PaymentCard month="12" />
                </Box>
              </VStack>
            </Flex>

            <Flex
              flex={{
                sm: 1,
                lg: "initial",
              }}
              w={{
                lg: 2.3 / 7,
              }}
              roundedTop="lg"
              borderBottomRightRadius="lg"
              borderTopLeftRadius={0}
              bg="red.50"
              _dark={{
                bg: "gray.700",
              }}
              my={6}
              direction="column"
            >
              <VStack
                spacing={1}
                justifyContent="center"
                p={8}
                textAlign="center"
                w="full"
                shadow="xl"
              >
                <chakra.span fontSize="3xl" fontWeight="normal">
                  Intermidiate Lavel
                </chakra.span>
                <HStack spacing={3}>
                  <chakra.span
                    fontWeight="normal"
                    fontSize="6xl"
                    textShadow="2px 0 currentcolor"
                  >
                    ₹149
                  </chakra.span>
                  <chakra.span
                    alignSelf="center"
                    fontSize="3xl"
                    _light={{
                      color: "red.400",
                    }}
                  >
                    /2 Year
                  </chakra.span>
                </HStack>
                {/* <Text fontSize="sm" color="red.500" _dark={{ color: "red.400" }} fontWeight='600'>*Or refer 6 friends</Text> */}
              </VStack>
              <VStack
                fontSize="sm"
                spacing={8}
                h="full"
                bg="red.100"
                _dark={{
                  bg: "gray.800",
                }}
                borderBottomRightRadius="lg"
                p={12}
              >
                <VStack
                  spacing={4}
                  w="full"
                  direction="column"
                  alignItems="start"
                >
                  <Feature>Suppression Management</Feature>
                  <Feature>Get Unlimited Videos </Feature>
                  <Feature>100% Refundable</Feature>
                </VStack>
                <Box
                  w="full"
                  ml={3}
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                >
                  <PaymentCard month="6" />
                </Box>
              </VStack>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Price;
