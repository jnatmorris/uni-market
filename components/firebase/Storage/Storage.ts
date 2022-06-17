import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../Intialize";

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
