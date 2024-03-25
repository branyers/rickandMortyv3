import { useEffect, useState } from "react";
import "./App.css";
import { GetCharacters } from "../services/getCharacters";
import { Header } from "./components/Header";
import { Container } from "./components/Container.jsx";
import ReactPaginate from "react-paginate";
import { Pagination } from "./components/Pagination.jsx";

function App() {
  const [character, setCharacter] = useState(null);
  const itemsPerPage = 4;

  useEffect(() => {
    GetCharacters().then((data) => {
      const { results, info } = data;
      setCharacter(results);
    });
  }, []);

  return (
    <main>
      <Header />
      <h1 className="text-8xl font-bold text-center mt-40">
        The Rick and Morty API
      </h1>
      <Container Characters={character} />
    </main>
  );
}

export default App;
