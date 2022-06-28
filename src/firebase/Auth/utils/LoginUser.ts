import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@config/Intialize";
import { loginErrorHandler_PropType } from "@Login/index";

export const LoginUser = async (
    email: string,
    password: string,
    setUser: (value: any) => void,
    loginErrorHandler?: ({}: loginErrorHandler_PropType) => void,
    setAttemptLogin?: (value: React.SetStateAction<boolean>) => void,
    setInvalidPassword?: (value: React.SetStateAction<boolean>) => void,
    setInvalidUsername?: (value: React.SetStateAction<boolean>) => void,
    setTooManyReq?: (value: React.SetStateAction<boolean>) => void
): Promise<void> => {
    const auth = getAuth(app);

    // sign in user with their email adn password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
        })
        // catch errors
        .catch((error) => {
            const errorCode = error.code;

            // print to console if in development mode
            if (process.env.NODE_ENV === "development") console.log(error);

            if (
                loginErrorHandler &&
                setAttemptLogin &&
                setInvalidPassword &&
                setInvalidUsername &&
                setTooManyReq
            )
                loginErrorHandler({
                    errorCode,
                    setAttemptLogin,
                    setInvalidPassword,
                    setInvalidUsername,
                    setTooManyReq,
                });
        });
};
