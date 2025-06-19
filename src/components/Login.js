import { useRef, useState } from "react";
import { BG_image } from "../utils/imgs";
import Header from "./Header";
import { chackValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        const message = chackValidData(
            email.current.value,
            password.current.value,
        )
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://scontent.fjai2-1.fna.fbcdn.net/v/t39.30808-6/481083736_1166502795050376_5766349131060590022_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xA31gAYgdAcQ7kNvwH8C4Bu&_nc_oc=AdnGqY4pIcToSX2dPLo2YnWMCI3x7In2XraLAOcUaeoaESThKK_wvbeBSE0wuEs03IA&_nc_zt=23&_nc_ht=scontent.fjai2-1.fna&_nc_gid=j3ciMhg_87Pcxr1swhnHqw&oh=00_AfN_OxtPeEnCsCBDhuMaWNmMykBNHx0Z33KZBYeGz4K49g&oe=685993CD"
                    })
                        .then(() => {
                                const { uid, email, displayName, photoURL } = auth.currentUser;
                                dispatch(
                                addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }))

                            navigate("/browse")
                        }).catch((error) => {
                            setErrorMessage(error.message)
                        });
                    console.log("Sign up successful:", user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                });
        } else {
            // Sign In logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("Sign in successful:", user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                    console.log("Sign in error:", errorCode, errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className="absolute ">
                <img src={BG_image} alt="Background" />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute text-white my-36 mx-auto right-0 left-0 p-12 bg-black w-3/12 bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Login" : "Sign Up"}</h1>

                {!isSignInForm &&
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-800"
                    />}

                <input
                    ref={email}
                    type="email"
                    placeholder={isSignInForm ? "Email" : "Email Address"}
                    className="p-4 my-4 w-full bg-gray-800"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder={isSignInForm ? "Password" : "Create Password"}
                    className="p-4 my-4 w-full bg-gray-800"
                />

                <p className="text-red-600 text-lg py-2">{errorMessage}</p>

                <button
                    className="py-4 my-6 bg-red-700 rounded-lg w-full"
                    onClick={handleButtonClick}
                    type="button"
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="p-4 cursor-pointer"
                    onClick={toggleSignInForm}>
                    {isSignInForm
                        ? "New to Netflix? Sign Up Now"
                        : "Already Registered? Sign In Now."}
                </p>
            </form>
        </div>
    )
};

export default Login;