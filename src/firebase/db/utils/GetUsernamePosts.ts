import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@config/Intialize";

export const GetUsernamePosts = async (username: string): Promise<object> => {
    const q = query(collection(db, "posts"), where("username", "==", username));
    const querySnapshot = await getDocs(q);

    var posts: object[] = [];

    // if they have posts
    if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
    }

    return posts;
};
