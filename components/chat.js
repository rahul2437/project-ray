import React from 'react'
import {Box,Image} from "@chakra-ui/react"

const Chat = () => {
    
  return (
  
    <>
    <Box position="fixed" bottom="50" right="50" zIndex="100">
    <a href="https://ray-socket.onrender.com/" target={"_blank"} >
    <Image src="https://cdn-icons-png.flaticon.com/512/1458/1458238.png" alt="logo" mb='12' height={55} />
    </a>
    </Box>
    </>
    
  )
}

export default Chat


