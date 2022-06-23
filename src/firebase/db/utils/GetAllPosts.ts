import { collection, getDocs } from "firebase/firestore";
import { db } from "@config/Intialize";

export const GetAllPosts = async (): Promise<any> => {
    const items = new Array();
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });

    return items;
};
