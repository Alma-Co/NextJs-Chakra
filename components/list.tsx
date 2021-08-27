
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
    list.map((e: Result) => <Box maxW="sm" borderWidth="2px" borderRadius="sm" overflow="hidden">
    <Image key={e.image} src={e.image ? `https://spoonacular.com/cdn/ingredients_100x100/${e.image}` : `https://images.assetsdelivery.com/compings_v2/pavelstasevich/pavelstasevich1902/pavelstasevich190200120.jpg`} alt={e.image as string} />   
      <Box
        key={e.name}
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {e.name}
      </Box>
    </Box>) : null
    )
}

export default List

