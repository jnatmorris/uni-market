import { doc, getDoc } from "firebase/firestore";
import { db } from "../Intialize";

const GetUsername = async (userID: string): Promise<string> => {
    // refence to user
    const docRef = doc(db, "users", userID);

    // get a snapshot of document
    const docSnap = await getDoc(docRef);

    // ensure user exists
    if (docSnap.exists()) {
        // return value of username
        return docSnap.data()["username"];
    } else {
        return "error";
    }
};

export { GetUsername };
