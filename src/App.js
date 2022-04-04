import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./componant/Header/Header";
import MovieList from "./Component/Main/MovieList/MovieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: "predestination",
      Rate: 5,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfQ6vsVlR8jIhXOw0WNwwdCPWsnN45Che5I6rAe7yZasVLdXEmJMxEQzAVUXvYLpPeXw&usqp=CAU",
      Des: "La prédestination est un concept théologique chrétien selon lequel Dieu aurait choisi de toute éternité ceux qui seront graciés et auront droit à la vie éternelle. L'idée de prédestination est étroitement associée aux débats philosophiques concernant le déterminisme et le nécessitarisme.",
      Year: "2014",
      id: "456",
    },
    {
      Title: "fight club",
      Rate: 4,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevuGwqCCqfLUXan0RAu1-fXQjyehdDAKRQA&usqp=CAU",
      Des: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed",
      Year: "1999",
      id: "321",
    },
    {
      Title: "Shutter Island",
      Rate: 5,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRk_QMhQ7-U2TD2j5KNkUFG9ydc0w6hYnvA&usqp=CAU",
      Des: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane. In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital",
      Year: "2010",
      id: "123",
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <>
      <Header addMovie={addMovie} movies={movies} newMovie={newMovie} />
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default App;
