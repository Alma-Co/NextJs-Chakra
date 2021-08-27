 

const apiKey: string = '4a0ba53fdb1f48a99e9a14b687015adb';

interface Result {
    name: string | null,
    image: string | null,
}
export const lastSearches: string[] = [].slice(0, 9);

export async function loadIngredientsFromAPIByName(name: string) {
    const endpoint: string = `https://api.spoonacular.com/food/ingredients/search?query=${name}&apiKey=${apiKey}`;
    const getFromLocalStorage: Result[]|null = JSON.parse(window.localStorage.getItem(name) as string);

    if(getFromLocalStorage && lastSearches.includes(name)) {
      return getFromLocalStorage
    } else {
      try {
        const response = await fetch(endpoint);
		    const data = await response.json();
        if (data.results.length) {
          lastSearches.unshift(name);
          window.localStorage.setItem(name, JSON.stringify(data.results));
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