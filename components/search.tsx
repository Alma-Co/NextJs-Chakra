
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Stack,
  Image,
  Tag,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";



const Search = ({value, handleChange, handleSubmit, modal, lastSearches}: any) => {
    return (
        <FormControl id="ingredient" isRequired>
      
        <InputGroup size="md" >
          <Input
            pr="4.5rem"
            type="text"
            maxW="xs"
            borderColor="teal.200"
            borderWidth="2px"
            value={value}
            onChange={handleChange}   
          />
     
            <Button colorScheme="purple" h="2.5rem" ml='4' alignItems='center' variant="solid" onClick={() => handleSubmit(null)}>
                Go!
            </Button>
         
        </InputGroup>
        <FormLabel fontSize="xs" color="grey">Enter a name to list all the ingredients related to it</FormLabel>

      { modal? 
      <Box borderWidth="2px" maxW="xs" borderRadius="sm" >
      <Tag margin="2" size={'sm'} key={'sm'} variant="solid" colorScheme="purple">Your last 10 searches are:</Tag>
        <Box padding="2" >    
            {lastSearches?.map((e: string)=> <Button key={e} onClick={() => handleSubmit(event)} size="xs">{e}</Button> )}             
        </Box> 
      </Box> : null
      }
      
 
    </FormControl> 
    )
}

export default Search