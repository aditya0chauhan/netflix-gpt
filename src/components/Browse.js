import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundryContainer from "./SecoundryContainer";
const Browse = () => {

    useNowPlayingMovies();

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