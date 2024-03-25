
export const GetCharacters = async (pages) => {
    console.log(pages)
    const characters = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`);
    const charactersJson = await characters.json();
    return charactersJson;
}