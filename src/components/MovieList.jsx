import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
        if (!movies) {
        return "Loading ...";   
    }
    return (
        <div className="px-6">
                <h1 className="py-4 text-3xl">{title}</h1>
            <div className="flex overflow-x-scroll"> 
            <div className="flex">
               {movies.map(movie => 
               <MovieCards key={movie.id} posterPath={movie.poster_path} />)}
            </div>
            </div>
        </div>
    )
};

export default MovieList;