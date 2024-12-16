import { useState } from "react";
import { List } from "./List";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { getLocalStorage, setLocalStorage } from "../utils/setLocalStorage";

export const Tasks = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(getLocalStorage("tasks") || []);

  const onDelete = (indexElement) => {
    const updateTasks = tasks.filter((_, index) => index !== indexElement);
    setTasks(updateTasks);
    setLocalStorage("tasks", updateTasks);
  };

  const handleClick = () => {
    const newTasks = [...tasks, value];
    setTasks(newTasks);
    setLocalStorage("tasks", newTasks);
  };
  return (
    <VStack minH="100vh" spacing={20} justifyContent="center">
      <Heading as="h1" size="2xl">
        ToDo APP
      </Heading>
      <InputGroup size="md" maxWidth="50%">
        <Input
          pr="2rem"
          type="text"
          placeholder="write your new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement width="6rem" marginRight="1rem">
          <Button
            colorScheme="teal"
            _hover={{
              background: "PaleTurquoise",
              color: "teal.500",
            }}
            h="1.75rem"
            fontSize="sm"
            onClick={handleClick}
          >
            Add task
          </Button>
        </InputRightElement>
      </InputGroup>
      <List tasks={tasks} onDelete={onDelete} />
    </VStack>
  );
};
