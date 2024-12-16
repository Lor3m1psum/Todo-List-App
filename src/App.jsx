import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CardList } from "./components/cardList";
import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { setLocalStorage } from "./utils/setLocalStorage";

function App() {
  const [value, setValue] = useState("");
  const [string, setString] = useState([]);

  const handleClick = () => {
    const newString = [...string, value];
    setString(newString);
    setLocalStorage("strings", newString);
  };
  return (
    <VStack minH="100vh" spacing={15} justifyContent="center">
      <Heading as="h1" size="2xl">
        ToDo APP
      </Heading>
      <HStack>
        <InputGroup size="md">
          <Input
            type="text"
            placeholder="add your new ToDo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightElement>
            <Button
              colorScheme="teal"
              _hover={{
                background: "PaleTurquoise",
                color: "teal.500",
              }}
              h="1.75rem"
              size="sm"
              onClick={handleClick}
            >
              <FaPlus />
            </Button>
          </InputRightElement>
        </InputGroup>
      </HStack>
      <CardList />
    </VStack>
  );
}

export default App;
