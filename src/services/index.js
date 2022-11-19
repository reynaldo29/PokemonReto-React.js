const baseUrl = "https://pokeapi.co/api/v2";

/* const baseURlBooks =
  "https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter?maxResults=30"; */

export const get = async (url) => {
  try {
    const response = await fetch(`${baseUrl}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

/* export const getBook = async(url) =>{
  try{
    const response = await fetch(`${baseURlBooks}`);
    return await response.json();
  }catch(error){
    console.log("error",error);
  }
}
 */

export const searchBooks = async (search) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30`
    );
    return await response.json();
  } catch (error) {
    console.log("Error", error);
  }
};
