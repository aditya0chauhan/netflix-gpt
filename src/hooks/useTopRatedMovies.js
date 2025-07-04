import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constent";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
     const dispatch = useDispatch()

    const getTopRatedMovies = async ( ) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated',
             API_OPTIONS
            );
            const json = await data.json()
            dispatch(addTopRatedMovies
            (json.results))
        };

        useEffect( ( ) => {
            getTopRatedMovies()
        }, [] )
}

export default useTopRatedMovies;