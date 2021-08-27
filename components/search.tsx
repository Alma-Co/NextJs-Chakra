
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
      <FormLabel>Enter a name and see the list of all the ingredients related to it</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            value={value}
            onChange={handleChange}   
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => handleSubmit(null)}>
                Search
            </Button>
          </InputRightElement>
        </InputGroup>

      { modal? 
      <Box borderWidth="2px" borderRadius="sm" >
      <Tag margin="2" size={'sm'} key={'sm'} variant="solid" colorScheme="teal">Your last 10 searches are:</Tag>
        <Box padding="2" >    
            {lastSearches?.map((e: string)=> <Button key={e} onClick={() => handleSubmit(event)} size="xs">{e}</Button> )}             
        </Box> 
      </Box> : null
      }
 
    </FormControl> 
    )
}

export default Search