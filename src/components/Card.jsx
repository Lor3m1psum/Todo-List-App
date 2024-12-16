import { Button, UnorderedList, ListItem, VStack } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Card = (props) => {
  const { task } = props;
  return (
    <VStack>
      <UnorderedList>
        <ListItem
          style={{
            textDecoration: task.done ? "line-through" : "none",
            marginRight: "2rem",
          }}
        >
          {task.title}
          <Button>
            <FaTrash />
          </Button>
          <Button>
            <FaCheck />
          </Button>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Card;
