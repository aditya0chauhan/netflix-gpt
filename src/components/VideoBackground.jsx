import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    useMovieTrailer(movieId)
    return (
        <div className="w-screen aspect-video object-cover">
            <ReactPlayer    
                url={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
                playing={true}
                muted={true}
                loop={true}
                width='100%'
                height='100%'
                controls={false} 
            />
        </div>
    )
};

export default VideoBackground;