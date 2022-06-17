import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../Intialize";

const SignUpUsername = async (
    userID: string,
    username: string
): Promise<void> => {
    console.log("signedup user?");
    await setDoc(doc(db, "users", userID), {
        username: username,
    });
};

export { SignUpUsername };
