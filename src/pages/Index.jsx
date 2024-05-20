import { Container, Text, VStack, Box, Image, Heading, Button } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Wildlife Photography
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Capturing the beauty of nature through the lens.
        </Text>
        <Box boxSize="md">
          <Image src="/images/wildlife.jpg" alt="Wildlife" borderRadius="lg" boxShadow="lg" />
        </Box>
        <Button rightIcon={<FaCamera />} colorScheme="teal" variant="solid" size="lg">
          Explore Gallery
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;