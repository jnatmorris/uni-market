import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const StorePostImage = async (image: File): Promise<string> => {
    // Create a root reference
    const storage = getStorage();

    // Create a reference to 'mountains.jpg'
    const storageRef = ref(storage, `imagePosts/${image.name}`);

    // await url to return
    const url = await uploadBytes(storageRef, image).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
    });
    return url;
};

export { StorePostImage };
