import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../config/Intialize";

export const LoginUser = async (
    email: string,
    password: string,
    setUser: (value: any) => void,
    loginErrorHandler: (value: string) => void
): Promise<void> => {
    const auth = getAuth(app);

    // sign in user with their email adn password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
        })
        // catch errors
        .catch((error) => {
            loginErrorHandler(error.code);
        });
};
