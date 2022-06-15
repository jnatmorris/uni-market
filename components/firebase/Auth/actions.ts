import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Intialize";
import { FirebaseApp } from "firebase/app/";

const GetCurrentInfo = (
    app: FirebaseApp,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
};

const AddUser = (
    email: string,
    password: string,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user, " is signed in");
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error code ", errorCode);
            console.log("Error message ", errorMessage);
        });
};

const LoginUser = (
    email: string,
    password: string,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};

const SingOutUser = (setUser: (value: any) => void): void => {
    const auth = getAuth(app);
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
            // An error happened.
        });
};

export { AddUser, SingOutUser, LoginUser, GetCurrentInfo };
