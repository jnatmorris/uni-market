import { db, app } from "../Intialize";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const SignUpUsername = async (
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

export { SignUpUsername };

const StorePostImage = async (image: File): Promise<string> => {
    // create refrence to storage for app
    const storage = getStorage(app);

    // refrence to image want to upload
    const storageRef = ref(storage, `imagePosts/${image.name}`);

    // upload image and await url to return
    const url = await uploadBytes(storageRef, image).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
    });

    return url;
};

export { StorePostImage };
