import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../config/Intialize";

export const SingOutUser = (setUser: (value: any) => void): void => {
    const auth = getAuth(app);

    // sign out user
    signOut(auth)
        .then(() => {
            // sucessfull signout
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        });
};
