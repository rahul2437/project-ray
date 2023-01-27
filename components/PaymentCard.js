import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ChakraBaseProvider,
  chakra,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const PaymentCard = ({month}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const initialRef = React.useRef(null);
  const toast = useToast();
  const [cvvData, setCvvData] = useState();
  // const {user} = useSelector(state => state.auth)

  const handleChange = (event) => {
    setCvvData(event.target.value);
  };
  const handleSubmit = async() => {
    // if(!user) { 
    //   toast({ 
    //     title: "Please Login First",
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //     position: "top",
    //   });
    //   onClose();
    //   return;
    // }
    if (cvvData === "123") {
      const res = await axios.post("/api/users/subscription", { email: user.email, month: month });
      toast({
        title: "Payment Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      onClose();
    } else {
      toast({
        title: "CVV Wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w="full"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={5}
        py={3}
        border="solid transparent"
        fontWeight="normal"
        rounded="md"
        color="red.600"
        _dark={{
          color: "red.100",
        }}
        bg="white"
        _hover={{
          bg: "brand.50",
          _dark: {
            bg: "gray.700",
          },
        }}
        cursor="pointer"
      >
        Get Started
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pay using card</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              w="90%"
              m="auto"
              bg="#022c4f"
              h="200px"
              color="red"
              p="15px"
              borderRadius="8px"
            >
              <chakra.h1>BOB CREDIT CARD</chakra.h1>
              <Text
                textAlign="center"
                letterSpacing="5px"
                mt="20px"
                fontSize="23px"
              >
                1234 4567 1234 4567
              </Text>
              <Flex justifyContent="space-between" align="right">
                <Box>
                  <Text mt="18px">Expiry</Text>
                  <Text>01/23</Text>
                </Box>
                <Box>
                  <FormControl w="30%">
                    <FormLabel>CVV</FormLabel>
                    <Input
                      placeholder="CVV"
                      required
                      maxLength="3"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSubmit}>
              Pay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentCard;


