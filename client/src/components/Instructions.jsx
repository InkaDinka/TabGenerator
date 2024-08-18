import { Box, Text, List, ListItem } from "@chakra-ui/react";

function Instructions() {
  return (
    <Box
      maxW="600px"
      mx="auto" // Center the box horizontally
      p={6}
      bg="gray.50"
      borderRadius="md"
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color="teal.600">
        Instructions:
      </Text>
      <List spacing={3}>
        <ListItem>
          <Text as="span" fontWeight="bold">1. </Text>
          First upload a guitar recording without any other instruments in one of the following file formats (mp3, ...).
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">2. </Text>
          Then hit the generate button, and a PDF file containing the tabbed out audio will be created.
        </ListItem>
      </List>
    </Box>
  );
}

export default Instructions;
