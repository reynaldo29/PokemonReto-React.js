const baseUrl = "https://pokeapi.co/api/v2";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseUrl}/${url}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
