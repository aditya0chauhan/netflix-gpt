import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    
    return (
        <div>
            <Header />
            <MainContainer />
            <SecoundryContainer />
            {/*
        Main Video Container
         - Video Background
         - Video TItle
    Secoundry Container
                - Movie List *n 
                - cards * n
*/}
        </div>
    )
}
export default Browse;