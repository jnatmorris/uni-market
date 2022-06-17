import { GetUsername } from "../db/ReadActions";
import { doc, setDoc, collection } from "firebase/firestore";

import { db } from "../Intialize";
// import { AddPostToDB } from "../db/Writeactions";
import { StorePostImage } from "../Storage/Storage";

const AddPost = (
    itemName: string,
    itemDesc: string,
    image: File | undefined,
    imageInfo: { width: number; height: number },
    price: number,
    userID: string,
    clearInputHandler: () => void
) => {
    if (!image) return;

    // wait for both promises to return
    Promise.all([GetUsername(userID), StorePostImage(image)]).then((values) => {
        // values from promises
        const [username, imageURL] = values;

        // add to database
        try {
            // generate random ID
            const ref = doc(collection(db, "posts"));

            // Add a new document in collection of posts with following data
            setDoc(ref, {
                // username: username,
                username: username,
                author: userID,
                itemName: itemName,
                itemDesc: itemDesc,
                imageURL: imageURL,
                imageHeight: imageInfo.height,
                imageWidth: imageInfo.width,
                price: price,
            });
        } catch (error) {
            console.error(error);
        }

        // revert UI to allow another post
        clearInputHandler();
    });
};
export default AddPost;
