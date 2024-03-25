
export const GetCharacters = async () => {
    const characters = await fetch(`https://rickandmortyapi.com/api/character/`);
    const charactersJson = await characters.json();
    return charactersJson;
}