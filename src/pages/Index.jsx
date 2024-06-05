import { Box, Container, Flex, Text, VStack, Link, Spacer, IconButton, Input, Button } from "@chakra-ui/react";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Implement login logic here
    console.log("Logging in with", email, password);
  };

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
          {!session ? (
            <Box
              as="form"
              width={{ base: "100%", md: "50%" }}
              padding={4}
              borderWidth={1}
              borderRadius="md"
              boxShadow="md"
              bg="white"
            >
              <VStack spacing={4}>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
                <Input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
                <Button colorScheme="blue" onClick={handleLogin}>
                  Login
                </Button>
              </VStack>
            </Box>
          ) : (
            <Button colorScheme="blue" onClick={logout}>
              Logout
            </Button>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;