import React from 'react'
import { Flex, Box, chakra, Stack, Icon } from '@chakra-ui/react'
import { FaShare } from 'react-icons/fa'

function Features() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{
              bg: "brand.500",
            }}
            color="red.50"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{
              color: "red.900",
            }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd
            mt={2}
            color="red.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg="red.50"
        _dark={{
          bg: "gray.800",
        }}
        rounded="xl"
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box
            textAlign='center'
          >
            <chakra.h2
              _light={{
                color: "brand.600",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Features
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="red.500"
              _dark={{
                color: "gray.400",
              }}
            >
              We provide the best services to our customers and we are always ready to help you.Below are some of the features we provide.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature
                title="Competitive exchange rates"
                icon={ <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> }
              >
                We have done the pricing as low as possible So that every one can afford this.
              </Feature>

              <Feature
                title=" No hidden fees"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
We do Not Charge Anr Hidden Fees or Any Extra amount. and We are Providing 24/7 Sapport system For clearing Doubt.(This Feature is not working at we are working on it.)


              </Feature>

              <Feature
                title="Regarding seriousness"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
               If you are serious about your Dream and Career Then It's for You.
              </Feature>

              <Feature
                title=" Notification"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
               All our customers are notified via email.(This Feature is not working at we are working on it.)
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features


