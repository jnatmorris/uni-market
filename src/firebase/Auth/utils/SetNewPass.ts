import { confirmPasswordReset, getAuth } from "firebase/auth";

export const SetNewPass = async (
    OobCode: string,
    newpassword: string,
    errorMessage: (errorCode: string) => void
) => {
    const auth = getAuth();
    confirmPasswordReset(auth, OobCode, newpassword)
        .then(() => {})
        .catch((error) => {
            const errorCode = error.code;
            console.log(error.code);
            errorMessage(errorCode);
        });
};
