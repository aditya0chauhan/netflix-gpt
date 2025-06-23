import { Logo } from "../utils/constent"
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constent";
import { changeLanguage } from "../utils/configSlice";

const Header = ( ) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    const handleSignOut = ( ) => {
    
        signOut(auth).then(() => {})
        .catch((error) => {
    navigate("/error")
});
    }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
      navigate("/")
      }
    }); onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
  //  unsubscribe  component unmount
    return () => unsubscribe()
  }, [])

  const handleGptSearchClick = () => {
   dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value  ))
  }

    return (
        <div 
        className="h-28 w-screen fixed px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center ">
        <img src={Logo}  
            className="w-44"/>
            {user && <div className="flex p-2">
               
            { showGptSearch &&  (
              <select 
                className="rounded-md px-4 bg-gray-900 text-white h-10 mx-4"
                onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang)=> (
                    <option key={lang.indentifier} value = {lang.identifier}>{lang.name}</option>
                    ))}
                </select>
              )}
              <button className="py-2 px-4 mx-2 rounded-md h-10 bg-purple-700 text-white"
              onClick={handleGptSearchClick}
              >{showGptSearch ? "HomePage" : "GPT Search"}</button>
                <img src={user?.photoURL} className="w-12 h-12"/>
                <button onClick={handleSignOut} className="font-bold text-white">(signOut)</button>
                </div>}

        </div>
    )
}

export default Header;
