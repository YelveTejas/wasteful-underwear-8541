import React from "react";
import { Container, Spacer,Box, Flex,ButtonGroup,Text, Image, Select, HStack, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, Portal, Button,PopoverBody, List, ListItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import Allroute from "../components/allroute";
import {Link} from 'react-router-dom'

export const Navbar=()=>{
    return (
        <>
        <Container maxW='9xl' bg='#00B5D8'>
       <Flex minWidth='max-content' alignItems='center' gap='2' color='white'>
  <Box p='2'>
    <Link to='/'>
    <HStack spacing={4}>
    <Image boxSize='50px' src='https://play-lh.googleusercontent.com/P6IAUnZ_W081-DmopltYHl9VaKg6T791mEweKns8mQMUOxySEniRgSGUFWBl82GSx-M=w240-h480-rw' alt='abd'/>
    <Text as='b' fontSize='2xl' color='black'>Tripoto</Text>
    </HStack>
    </Link>
    
  </Box>
  <Spacer />
  <ButtonGroup gap='6'>
  <Menu>
  <MenuButton bg='#00B5D8' as={Button} >
    Actions
  </MenuButton>
  <MenuList bgColor='white' color='black'>
    <MenuItem>Visit Singapore</MenuItem>
    <MenuItem>Beaches</MenuItem>
    <MenuItem>Mountains</MenuItem>
    <MenuItem>Heritage</MenuItem>
    <MenuItem>Upcoming Festivals</MenuItem>
    <MenuItem>Honeymoon Packages</MenuItem>
  </MenuList>
</Menu>

    <Text marginTop='8px'>Forum</Text>
    <Text marginTop='8px'> Pakages</Text>
    <Menu alignItems='center' marginTop='-10px'>
  <MenuButton bg='#00B5D8' as={Button} >
   <Text>Publish Trips</Text>
  </MenuButton>
  <MenuList bgColor='white' color='black'>
    <MenuItem>Create New</MenuItem>
    <MenuItem>Upload photos/Videos</MenuItem>
    <MenuItem>Import Blog</MenuItem>
  
  </MenuList>
</Menu>
    <Link marginTop='8px' to='/login'>Log in</Link>
    

  </ButtonGroup>
   </Flex>
        </Container>
   
        </>
    )
}