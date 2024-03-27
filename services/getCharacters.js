
export const GetCharacters = async (pages) => {
    const characters = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`);
    const charactersJson = await characters.json();
    return charactersJson;
}