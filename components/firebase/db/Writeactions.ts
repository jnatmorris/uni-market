import { doc, setDoc } from "firebase/firestore";
import { db } from "../Intialize";

const SignUpUsername = async (
    userID: string,
    username: string
): Promise<void> => {
    // link username to uid
    await setDoc(doc(db, "users", userID), {
        username: username,
    });
};

export { SignUpUsername };
