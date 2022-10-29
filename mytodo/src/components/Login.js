import { useContext, useState } from "react";
import { MyContext } from '../contexts/MyContext';
import '../App.css';
import { useNavigate } from "react-router-dom";

import {
    Heading,
    IconButton,
    VStack,
    useColorMode,
    useToast,
  } from "@chakra-ui/react";

export const Login = () => {
    const [user, setUser] = useState('');
    const { setUsername, setIsLogged } = useContext(MyContext);
    const navigate = useNavigate();
    const keyDownHandler = event => {
        console.log('User pressed: ', event.key);
  
        if (event.key === 'Enter') {
          event.preventDefault();
          navigate("/home");
        }
      };
      document.addEventListener('keydown', keyDownHandler);
      
    return (
        <>
            <Heading
                    p='5'
                    fontWeight='extrabold'
                    size='xl'
                    bgGradient='blue'
                    bgClip='text'
                >
                    LOGIN
                </Heading>
            <div className="user-form">
                Username: 
                <input
                    type="text"
                    value={user}
                    onChange={(e) => {
                        setUser(e.target.value);
                        setUsername(e.target.value);
                        setIsLogged(e.target.value !== '');
                    }
                } />
            </div>
        </>
    )
}