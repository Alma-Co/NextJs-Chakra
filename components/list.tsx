
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

interface Result {
    name: string | null,
    image: string | null,
}

const List = ({list}: any) => {
    return(
    list?
    list.map((e: Result) => 
    <Box p='4' d="flex" alignItems="center" maxW="xs" borderWidth="2px" borderRadius="lg">
      <Box maxW="xl" >
        <Image  borderRadius="full" boxSize="60px" key={e.image} src={e.image ? `https://spoonacular.com/cdn/ingredients_100x100/${e.image}` : `https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1902/pavelstasevich190200120.jpg`} alt={e.image as string} />   
      </Box>
      <Box
        color="gray.700"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="sm"
        p='5'>
        {e.name}
      </Box>       
    </Box>) : null
    )
}

export default List

