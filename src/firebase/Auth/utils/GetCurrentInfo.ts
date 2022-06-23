import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseApp } from "firebase/app/";

export const GetCurrentInfo = (
    app: FirebaseApp,
    setUser: (value: any) => void
): void => {
    const auth = getAuth(app);
    // check and set user values
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
};
