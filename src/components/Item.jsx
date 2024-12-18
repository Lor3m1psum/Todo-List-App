import { Text, Button, ListItem, HStack } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Item = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <ListItem
      display="flex"
      alignItems="center"
      gap="1rem"
      justifyContent="space-between"
    >
      <HStack>
        <Text textDecoration={task.completed ? "line-through" : "none"}>
          {task.text}
        </Text>
      </HStack>
      <HStack>
        <Button fontSize="sm" onClick={() => onToggleComplete(task.id)}>
          <FaCheck />
        </Button>
        <Button fontSize="sm" onClick={() => onDeleteTask(task.id)}>
          <FaTrash />
        </Button>
      </HStack>
    </ListItem>
  );
};

export default Item;
