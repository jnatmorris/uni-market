import { setNewPassHandler_PropType } from "@newPass/index";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import { LoginUser } from "@auth/index";

export const setNewPassHandler = (props: setNewPassHandler_PropType): void => {
    const {
        newPassInput,
        newPassInput2,
        setError_ShortPass,
        setError_PassNotSame,
        actionCode,
        email,
        setUser,
        router,
        errorMessageHandler,
        setError_BadLink,
    } = props;

    if (newPassInput.length <= 6 || newPassInput !== newPassInput2) {
        if (newPassInput.length <= 6) setError_ShortPass(true);

        if (newPassInput !== newPassInput2) setError_PassNotSame(true);
    } else {
        const auth = getAuth();

        // Save the new password.
        confirmPasswordReset(auth, actionCode, newPassInput)
            .then(() => {
                LoginUser(email, newPassInput, setUser);
                //  // attempting to log in user
            })
            .then(() => {
                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                errorMessageHandler(errorCode);
            });
    }

    // if passwords are not same
    if (newPassInput !== newPassInput2) {
        const errorCode = "diff-passes";
        errorMessageHandler({
            errorCode,
            setError_ShortPass,
            setError_BadLink,
            setError_PassNotSame,
        });
    } else {
        setError_PassNotSame(false);
    }
};
