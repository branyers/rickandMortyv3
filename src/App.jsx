import { useEffect, useState } from 'react'
import './App.css'
import { GetCharacters } from '../services/getCharacters'
import { Header } from './components/Header'
import {Container} from './components/Container.jsx'
import ReactPaginate from 'react-paginate'

function App() {
  const [character, setCharacter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;


  

  useEffect(()=>{
    GetCharacters(currentPage).then((data) => {
      const {results,info} = data;
      setTotalPages(info.count)

      const paginatedCharacters = [];
      for (let i = 0; i < results.length; i += itemsPerPage) {
        paginatedCharacters.push(results.slice(i, i + itemsPerPage));
      }
      setCharacter(paginatedCharacters);

    })
  },[currentPage])

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };


  return (

       <main>
      <Header/>
      <h1 className='text-8xl font-bold text-center mt-40'>The Rick and Morty API</h1>
        <Container Characters={character} Page={currentPage} />


      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
    </main>

  )
}

export default App
