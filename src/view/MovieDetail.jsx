import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MovieServices } from "../api/MovieServices";

export const MovieDetail = () => {
    let { id } = useParams();

    const [movie, setMovie] = useState({});

    const FetchMovie = async () => {
        try {
            const response = await MovieServices.getMovieById(id);
            if (response && response.data) {
                setMovie(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch movie:", error);
        }
    }

    useEffect(() => {
        FetchMovie();
    }, []);

    return (
        <> 
         <h1>{movie.original_title}</h1>
        <article>
            {movie.overview}
        </article>
        </>
           
        
    );


}
