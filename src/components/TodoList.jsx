import { Heading, UnorderedList, VStack } from "@chakra-ui/react";
import Item from "./Item";

const TodoList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <VStack>
      <Heading as="h4">Tasks list</Heading>
      <UnorderedList spacing={3}>
        {tasks.map((task) => (
          <Item
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default TodoList;
