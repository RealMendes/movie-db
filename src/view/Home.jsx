import { useEffect, useState } from "react";
import { MovieServices } from "../api/MovieServices";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
     try {
       const response = await MovieServices.getMovies();
       if (response && response.data) {
         setMovies(response.data.results);
       }
     } catch (error) {
       console.error("Failed to fetch movies:", error);
     }
   };
   
    useEffect(() => {
       fetchMovies();
    }, []);
   
    return (
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    );
};
  
