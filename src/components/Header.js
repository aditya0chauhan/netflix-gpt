import { Logo, SIGN_OUT } from "../utils/imgs"
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ( ) => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const handleSignOut = ( ) => {
    signOut(auth).then(() => {
        navigate("/")
}).catch((error) => {
    navigate("/error")
});
    }
    return (
        <div 
        className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img src={Logo}  
            className="w-44"/>
            
            {user && <div className="flex p-2">
                <img src={user?.photoURL} className="w-12 h-12"/>
                <button onClick={handleSignOut} className="font-bold text-white">(SignOut)</button>
                </div>}

        </div>
    )
}

export default Header;
