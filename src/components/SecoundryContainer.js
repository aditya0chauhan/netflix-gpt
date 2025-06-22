import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundryContainer = ( ) => {
    const movies =  useSelector(store => store.movies)
    return(
        <div className="bg-black text-white"> 
        <div className="-mt-80 pl-16 relative z-10" >
            <MovieList  title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
            <MovieList  title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
            <MovieList  title={"Popular Movies"} movies={movies.popularMovies}/>
            <MovieList  title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
            <MovieList  title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
            {/* 
            Movie List - popular 
                movie cards * n
            Movie List - Now playing
            Movie List - Trending
            Movie List - Horror
            */}
            </div>  
        </div>
    )
}

export default SecoundryContainer;