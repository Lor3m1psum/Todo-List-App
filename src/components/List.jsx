import { Button, Heading, Text, UnorderedList, VStack } from "@chakra-ui/react";

export const List = ({ tasks, onDelete }) => {
  return (
    <VStack>
      <Heading as="h4">Tasks list</Heading>
      <UnorderedList>
        {tasks.map((task, index) => (
          <Text key={index + task}>{task}</Text>
        ))}
        <Button fontSize="sm" onClick={() => onDelete(index)}>
          Delete
        </Button>
      </UnorderedList>
    </VStack>
  );
};
