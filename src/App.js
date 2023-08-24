import './App.css';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg';
import MovieCard from './movieCard';

const apiURL = 'http://www.omdbapi.com?apikey=713b00a8'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${apiURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies)

  }
 

  useEffect(() => {
    searchMovies('batman')
  }, [])

  return (
    <div className="app">
      <h1>MOODY Movies</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies with MOODY Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 
        ? (
          <div className='container'>
            { movies.map((movie) => (
              < MovieCard movie={movie} />
            ))}

          </div>
        ) : (
          <div className='empty'>
            <h2>NO movies found !</h2>
          </div>
        )
      }
    <h6>Made with love by Ataa</h6>
    </div>
  );
}

export default App;
