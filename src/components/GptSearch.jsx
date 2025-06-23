import { BG_image } from "../utils/constent";
import GptMovieSuggesstion from "./GptMovieSuggesstion";
import GptSearchBar from "./GptSearchBar";

const GptSearch  = () => {
    return (
        <div>
            <div className="absolute -z-10"> 
                <img src={BG_image}/>
            </div>
            <GptSearchBar />
            <GptMovieSuggesstion />
        </div>
    )
};
export default GptSearch;