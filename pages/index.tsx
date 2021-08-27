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
import List from '../components/list';
import Search from '../components/search';
import {loadIngredientsFromAPIByName, lastSearches} from './api/api_ingredients';


interface Result {
    name: string | null,
    image: string | null,
}


const Home = () => {
const [modal, setModal] = useState<boolean>(false);
const [value, setValue] = useState<string>('');
const [ingredientsList, setIngredientsList] = useState<Result[]>();

  const handleSubmit = async (event: any) => {    
    event ? setIngredientsList(await loadIngredientsFromAPIByName(event.target.innerText)) : setIngredientsList( await loadIngredientsFromAPIByName(value));
  }

  const handleChange = (event: any) => {
    event.target.value.length ? setModal(false) : setModal(true);
    setValue(event.target.value);
  }

  return (
    <Stack>
      <Search value={value} handleChange={handleChange} handleSubmit={handleSubmit} modal={modal} lastSearches={lastSearches} />
      <List list={ingredientsList}/>
    </Stack>        
  )
}

export default Home

