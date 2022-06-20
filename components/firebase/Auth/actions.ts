import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Intialize";
import { FirebaseApp } from "firebase/app/";
import { SignUpUsername } from "../db/Writeactions";
import { User } from "firebase/auth";

const GetCurrentInfo = (
    app: FirebaseApp,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);
    // check and set user values
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
};

const AddUser = (
    email: string,
    userName: string,
    password: string,
    setUser: (value: User | null) => void,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    contactPref: string,
    langPref: string
): void => {
    const auth = getAuth(app);
    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setUser(user);
            SignUpUsername(
                user.uid,
                email,
                userName,
                firstName,
                lastName,
                phoneNumber,
                contactPref,
                langPref
            );
        })
        .catch((error) => {
            // catch and errors
            console.log("Error code ", error.code);
            console.log("Error message ", error.message);
        });
};

const LoginUser = (
    email: string,
    password: string,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);

    // sign in user with their email adn password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
        })
        // catch errors
        .catch((error) => {
            console.log("Error code ", error.code);
            console.log("Error message ", error.message);
        });
};

const SingOutUser = (setUser: (value: any) => void): void => {
    const auth = getAuth(app);

    // sign out user
    signOut(auth)
        .then(() => {
            // sucessfull signout
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        });
};

export { AddUser, SingOutUser, LoginUser, GetCurrentInfo };
