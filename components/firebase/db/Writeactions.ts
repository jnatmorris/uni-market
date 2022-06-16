import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../Intialize";
import { GetUsername } from "./ReadActions";

const AddPost = (
    itemName: string,
    itemDesc: string,
    userID: string,
    price: number,
    clearInputHandler: () => void
) => {
    try {
        GetUsername(userID).then((username) => {
            // generate random ID
            const ref = doc(collection(db, "posts"));

            console.log(username);

            // Add a new document in collection of posts with following data
            setDoc(ref, {
                // username: username,
                username: username,
                author: userID,
                itemName: itemName,
                itemDesc: itemDesc,
                price: price,
            });
            // revert UI to allow another post
            clearInputHandler();
        });
    } catch (error) {
        console.log(error);
    }
};

const SignUpUsername = async (
    userID: string,
    username: string
): Promise<void> => {
    console.log("signedup user?");
    await setDoc(doc(db, "users", userID), {
        username: username,
    });
};

export { AddPost, SignUpUsername };
