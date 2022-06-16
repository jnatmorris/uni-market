import { doc, getDoc } from "firebase/firestore";
import { db } from "../Intialize";

const GetUsername = async (userID: string): Promise<string> => {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()["username"];
    } else {
        return "error";
    }
};

export { GetUsername };
