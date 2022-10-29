import { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { TodoContext } from '../contexts/TodoContext';
import {
    Heading,
    IconButton,
    VStack,
    useColorMode,
    useToast,
  } from "@chakra-ui/react";
export const HomePage = () => {
    const { username, isLogged } = useContext(MyContext);
    const { tasks } = useContext(TodoContext);

    return (
        <>
            <Heading
                    p='5'
                    fontWeight='extrabold'
                    size='xl'
                    bgGradient='blue'
                    bgClip='text'
                >
                    WELCOME
                </Heading>
            <div>
                {isLogged && (
                    <h1>WELCOME MY PRO</h1>
                )}
                {isLogged ? (
                    <h1>Chào mừng <strong>{username}</strong> thăm trang của tui</h1>
                ) : (
                    <h1>Bạn chưa đăng nhập</h1>
                )}

                {/* {tasks.map(item => (
                    <div>
                        <h2>{item.name}</h2>
                        <h5>{item.isCompleted ? 'DONE' : 'IN-PROGRESS'}</h5>
                    </div>
                ))} */}
            </div>
        </>
    )
}