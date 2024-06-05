import { Box, Container, Flex, Text, VStack, Link, Spacer, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg">
      <Flex as="nav" bg="blue.500" color="white" padding={4} alignItems="center">
        <Link href="/" fontSize="xl" fontWeight="bold" marginRight={4}>
          MyApp
        </Link>
        <Spacer />
        <Link href="/" marginRight={4}>
          <IconButton aria-label="Home" icon={<FaHome />} />
        </Link>
        <Link href="/about">
          <IconButton aria-label="About" icon={<FaInfoCircle />} />
        </Link>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure with a navigation bar.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;