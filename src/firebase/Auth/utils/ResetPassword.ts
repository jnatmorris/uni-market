import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const ResetPassword = (
    email: string,
    setSentNewPassEmail: (value: boolean) => void
): void => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("sent!");
            setSentNewPassEmail(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};
