import { getDatabase, ref, set, child, get, push } from "firebase/database";
import { app } from "../Intialize";

const WriteData = (
    userId: string,
    userName: string,
    itemName: string,
    itemDiscription: string,
    setNewPost: (value: boolean) => void
): boolean => {
    try {
        const db = getDatabase(app);

        const postsRef = ref(db, "posts");
        const newPostRef = push(postsRef);

        set(newPostRef, {
            userId: userId,
            userName: userName,
            itemName: itemName,
            itemDiscription: itemDiscription,
        });

        console.log("did it!");

        return true;
    } catch {
        setNewPost(false);

        return false;
    }
};

const ReadData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `posts/`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });
};
export { WriteData, ReadData };
