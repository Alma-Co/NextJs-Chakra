import {
  Stack,
  Box,
  Flex,
  Image,
  Heading
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { lastSearches, loadIngredientsFromAPIByName, Result } from '../api/api_ingredients';
import List from '../components/list';
import Search from '../components/search';


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
    <Stack p={8} spacing={4} >
      <Flex alignItems='center'>
        <Heading color="teal.200" fontWeight="bold" letterSpacing="wide">Yumm ... !</Heading>
        <Image borderRadius="full" boxSize="60px" src="https://img.freepik.com/vecteurs-libre/mignon-heureux-toast-drole-boire-du-cafe-conception-icone-illustration-personnage-dessin-anime-isole-fond-blanc_92289-1038.jpg?size=338&ext=jpg" alt="Segun Adebayo" />
      </Flex>
      <Search  value={value} handleChange={handleChange} handleSubmit={handleSubmit} modal={modal} lastSearches={lastSearches} />
      <List  list={ingredientsList}/>
    </Stack>        
  )
}

export default Home

