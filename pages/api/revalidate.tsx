import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@config/Intialize";

export default async function handler(req: any, res: any) {
    console.log("in handler");

    // Check for secret to confirm this is a valid request
    if (req.query.secret !== "test") {
        console.log(req.query.secret);
        return res.status(401).json({ message: "Invalid token" });
    }

    try {
        console.log("We are revalidating!");
        res.revalidate("/");
        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }
}
