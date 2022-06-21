import { db } from "../Intialize";
import { collection, getDocs } from "firebase/firestore";

const SRRIndexActions = async (): Promise<any> => {
    const items = new Array();
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    });

    return items;
};

export default SRRIndexActions;
