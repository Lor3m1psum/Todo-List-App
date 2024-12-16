import {
  Button,
  Heading,
  HStack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

export const List = ({ tasks, onDelete }) => {
  return (
    <VStack>
      <Heading as="h4">Tasks list</Heading>
      <UnorderedList>
        {tasks.map((task, index) => (
          <HStack key={index + task}>
            <Text>{task}</Text>
            <Button fontSize="sm" onClick={() => onDelete(index)}>
              Delete
            </Button>
          </HStack>
        ))}
      </UnorderedList>
    </VStack>
  );
};
