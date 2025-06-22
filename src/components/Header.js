import { Logo } from "../utils/constent"
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ( ) => {
      const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const user = useSelector(store => store.user)

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

    return (
        <div 
        className="w-screen fixed px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  ">
        <img src={Logo}  
            className="w-44"/>
            
            {user && <div className="flex p-2">
                <img src={user?.photoURL} className="w-12 h-12"/>
                <button onClick={handleSignOut} className="font-bold text-white">(signOut)</button>
                </div>}

        </div>
    )
}

export default Header;
