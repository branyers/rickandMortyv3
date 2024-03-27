import { useEffect, useState } from "react";
import "./App.css";
import { GetCharacters } from "../services/getCharacters";
import { Header } from "./components/Header";
import { Container } from "./components/Container.jsx";

function App() {
  const [character, setCharacter] = useState(null);
  const [countInfo, setCountInfo] = useState(null);
  const [results, setResults] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState(1);
  const [Changes, setChange] = useState(0);
  const itemsPerPage = 4;
  const endOffset = offset + itemsPerPage;
  useEffect(() => {

    GetCharacters(pages).then((data) => {
      const { results, info } = data;
      setCountInfo(info);
      setCharacter(results.slice(offset, endOffset));
      setResults(results);
    });
  }, [offset]);

  // useEffect(()=>{
  //   if (results === null) return;
  //   console.log(endOffset, "endOffset")
  //   console.log(results.length, "results length")
  //   if (endOffset > results.length ) {
  //     GetCharacters(pages + 1).then((data) => {
  //       const { results, info } = data;
  //       setCountInfo(info);
  //       setCharacter([...character, ...results.slice(0, itemsPerPage - (results.length - offset))]);
  //       setResults([...results, ...results]);
  //     });

  //   }

  // }, [Changes])





  

  const handlePageChange = (event) => {
      // console.log(event.selected);
      // const endOffset = offset * itemsPerPage;
      // console.log(endOffset);
      // const Characters = [...character];
      // console.log(Characters.length, "characters length");

      // if (endOffset <= Characters.length) {
      //   const newCharacters = Characters.slice(offset, endOffset);
        
      // }

      const newOffset = (event.selected * itemsPerPage) % results.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setOffset(newOffset);
      setChange(newOffset)

  }

  return (
    <main>
      <Header />
      <h1 className="text-8xl font-bold text-center mt-40">
        The Rick and Morty API
      </h1>
      {countInfo && <Container handleClickSeleted={handlePageChange} Characters={character} Page={countInfo} itemsPerPage={itemsPerPage}/>}
      
    </main>
  );
}

export default App;
