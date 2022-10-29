import {
    Heading,
    IconButton,
    VStack,
    useColorMode,
    useToast,
  } from "@chakra-ui/react";
import TaskList from "./components/tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";


export const Todo = () => {
    const toast = useToast();
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  function deleteTaskAll() {
    setTasks([]);
  }

  function checkTask(id) {
    const newTasksCheck = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });
    setTasks(newTasksCheck);
  }

  function updateTask(id, body, onClose) {
    const info = body.trim();

    if (!info) {
      toast({
        title: "Enter your task",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    const newTasksUpdate = tasks.map((task, index, array) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
  }

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            {/* <h2>TODOs</h2>
            <VerticalTimeline>
                {tasks.map((item) => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.deadline}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            contentStyle={{ color: "rgb(33, 150, 243)", background: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.name}
                            </h3>
                            {!item.isCompleted && (
                                <button style={{ padding: 9, margin: 3, backgroundColor: '#06d6a0', color: 'white' }}>
                                    Complete
                                </button>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline> */}
            <VStack p={4} minH='100vh' pb={28}>
                <IconButton
                    icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                    isRound='true'
                    size='md'
                    alignSelf='flex-end'
                    onClick={toggleColorMode}
                    aria-label='toogle-dark-mode'
                />

                <Heading
                    p='5'
                    fontWeight='extrabold'
                    size='xl'
                    bgGradient='blue'
                    bgClip='text'
                >
                    TODOapp
                </Heading>
                <AddTask addTask={addTask} />
                <TaskList
                    tasks={tasks}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    deleteTaskAll={deleteTaskAll}
                    checkTask={checkTask}
                />
            </VStack>
        </>
    )
}