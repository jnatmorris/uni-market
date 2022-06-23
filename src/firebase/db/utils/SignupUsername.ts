import { db } from "@config/Intialize";
import { doc, setDoc } from "firebase/firestore";

export const SignUpUsername = async (
    userID: string,
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    contactPref: string,
    langPref: string
): Promise<void> => {
    // link username to uid
    await setDoc(doc(db, "users", userID), {
        email: email,
        firstName: firstName,
        lastName: lastName,
        username: username,
        phoneNumber: phoneNumber,
        contactPref: contactPref,
        langPref: langPref,
    });
};
