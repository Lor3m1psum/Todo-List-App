import { useState, useEffect } from "react";
import TodoList from "../src/components/TodoList";
import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  VStack,
} from "@chakra-ui/react";

import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./utils/storage";

const App = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const loadedTasks = loadTasksFromLocalStorage();
    setTasks(loadedTasks);
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (taskText.trim() === "") return; // Esto evita agregar tareas vacías
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // 'all'
  });

  return (
    <VStack minH="100vh" spacing={20} justifyContent="center">
      <Heading as="h1" size="2xl">
        Todo list APP
      </Heading>
      <VStack width="50%">
        <InputGroup size="md">
          <Input
            pr="2rem"
            type="text"
            placeholder="write your new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && taskText.trim()) {
                handleAddTask();
              }
            }}
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
              onClick={handleAddTask}
            >
              Add task
            </Button>
          </InputRightElement>
        </InputGroup>
        <Select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All tasks</option>
          <option value="completed">Tasks completed</option>
          <option value="incomplete">Tasks pending</option>
        </Select>
      </VStack>
      <TodoList
        tasks={filteredTasks}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    </VStack>
  );
};

export default App;
