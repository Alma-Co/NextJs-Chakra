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

const lastSearches: string[] = [].slice(0, 9);;
const apiKey: string = '4a0ba53fdb1f48a99e9a14b687015adb';


const Home = () => {
const [modal, setModal] = useState<boolean>(false);
const [value, setValue] = useState<string>('');
const [ingredientsList, setIngredientsList] = useState<Result[]|null>(null);



  async function loadIngredientsFromAPIByName(name: string) {
    const endpoint: string = `https://api.spoonacular.com/food/ingredients/search?query=${name}&apiKey=${apiKey}`;
    const getFromLocalStorage: Result[]|null = JSON.parse(window.localStorage.getItem(name) as string);

    if(getFromLocalStorage && lastSearches.includes(name)) {
      return setIngredientsList(getFromLocalStorage)
    } else {
      try {
        const response = await fetch(endpoint);
		    const data = await response.json();
        if (data.results.length) {
          lastSearches.unshift(name);
          window.localStorage.setItem(name, JSON.stringify(data.results));
          return setIngredientsList(data.results);
        } else {
          const noResult: Result[] =[{name: 'There is no results for this search', image: null}]
          return setIngredientsList(noResult);
        }
		    
      } catch (error: any) {
       
	    return error
      }
    }
  }

  const handleSubmit = (event: any) => {    
    event ? loadIngredientsFromAPIByName(event.target.innerText) : loadIngredientsFromAPIByName(value);
  }

  const handleChange = (event: any) => {
    event.target.value.length ? setModal(false) : setModal(true);
    setValue(event.target.value);
  }

  return (
   <Stack>
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
            {lastSearches?.map(e => <Button key={e} onClick={() => handleSubmit(event)} size="xs">{e}</Button> )}             
        </Box> 
      </Box> : null
      }
 
    </FormControl> 
    {ingredientsList?.map(e => <Box maxW="sm" borderWidth="2px" borderRadius="sm" overflow="hidden">
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
      </Box>)}

    </Stack>        
  )
}

export default Home

