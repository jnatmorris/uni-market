import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SignUpUsername } from "@db/index";
import { User } from "firebase/auth";
import { app } from "@config/Intialize";

export const AddUser = (
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
