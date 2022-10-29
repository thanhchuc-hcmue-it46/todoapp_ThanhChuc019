import './About.css';import {
    Heading,
    IconButton,
    VStack,
    useColorMode,
    useToast,
  } from "@chakra-ui/react";
export const About = () => {

    return (
        <>
            <Heading
                    p='5'
                    fontWeight='extrabold'
                    size='xl'
                    bgGradient='blue'
                    bgClip='text'
                >
                    ABOUT
                </Heading>
            <h1>Lê Thị Thanh Chúc </h1>
            <h2>MSSV: 46.01.104.109 </h2>
            <div>Mail sinh viên: 4601104019@student.hcmue.edu.vn </div>
            <div>Mail cá nhân: thanhchucnaalun02@gmail.com </div>
        </>
    )
}