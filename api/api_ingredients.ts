 

const apiKey: string = '4a0ba53fdb1f48a99e9a14b687015adb';

export interface Result {
    name: string | null,
    image: string | null,
}
export const lastSearches: string[] = [].slice(0, 9);

const getFromLocalStorage = (name:string): Result[]|null => {
  return JSON.parse(window.localStorage.getItem(name) as string);
}
const setInLocalStorage = (name: string, ingredient: Result[]) => {
 return window.localStorage.setItem(name, JSON.stringify(ingredient));
}

export async function loadIngredientsFromAPIByName(name: string) {
    const endpoint: string = `https://api.spoonacular.com/food/ingredients/search?query=${name}&apiKey=${apiKey}`;
    

    if(getFromLocalStorage(name) !== null) {
      lastSearches.includes(name) ? null : lastSearches.unshift(name);
      return getFromLocalStorage(name)
    } else {
      try {
        const response = await fetch(endpoint);
		    const data = await response.json();
        if (data.results.length) {
          lastSearches.includes(name) ? null : lastSearches.unshift(name);
          setInLocalStorage(name, data.results)
          return data.results;
        } else {
          const noResult: Result[] =[{name: 'There is no results for this search', image: null}]
          return noResult;
        }
		    
      } catch (error: any) {
       
	    return error
      }
    }
  }