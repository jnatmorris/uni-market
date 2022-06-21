import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Intialize";

interface UserValues {
    lastName: string;
    firstName: string;
    phoneNumber: string;
    username: string;
    contactPref: string;
}

const ValidateUsername = async (urlUsername: any): Promise<boolean | {}> => {
    // check if username is in database
    const q = query(
        collection(db, "users"),
        where("username", "==", urlUsername)
    );
    const querySnapshot = await getDocs(q);
    // if no username or more than one user with that name
    if (querySnapshot.size !== 1) {
        return false;
    } else {
        var values: object[] = [];

        querySnapshot.forEach((doc) => {
            values.push(doc.data());
        });
    }

    return values[0];
};

const GetPostsFromUser = async (username: string): Promise<object> => {
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

export { ValidateUsername, GetPostsFromUser };
