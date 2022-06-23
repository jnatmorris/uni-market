import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@config/Intialize";

export const ValidateUsername = async (
    urlUsername: any
): Promise<boolean | object> => {
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
