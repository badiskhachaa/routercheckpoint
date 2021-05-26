import "./App.css";
import MovieList from "./componenets/MovieList";
import Filter from "./componenets/Filter";
import AddMovie from "./componenets/AddMovie";
import { useState } from "react";
import data from './componenets/data'
function App() {
  const [ftext,setFtext] = useState("")
  const [frate,setFrate] = useState(1)
  const [movies, SetMovies] = useState(data);
  const addMovie = (newMovie) => SetMovies([...movies, newMovie]);
  const deleteMovie = (id) => SetMovies(movies.filter((el) => el.id !== id));
  return (
    <div className="App">
      <header className="App-header">
        <Filter setftext={setFtext} setfrate={setFrate}/>
        <MovieList
          deleteMovie={deleteMovie} 
          movies={movies.filter((el) => el.title.includes(ftext) && el.rate >= frate)}
        />
        <AddMovie addMovie={addMovie} />
      </header>
    </div>
  );
}

export default App;
