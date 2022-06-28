import { errorMessageHandler_PropType } from "@newPass/index";

// error handling
export const errorMessageHandler = (
    props: errorMessageHandler_PropType
): void => {
    const {
        errorCode,
        setError_ShortPass,
        setError_BadLink,
        setError_PassNotSame,
    } = props;
    switch (errorCode) {
        // if user password is less than 6 charictors
        case "auth/weak-password":
            // should never be run as handled client side, but just in case
            setError_ShortPass(true);
            break;

        // invalid or expired action code for password reset
        case "auth/invalid-action-code":
            setError_BadLink(true);
            break;

        case "diff-passes":
            setError_PassNotSame(true);
            break;

        default:
            break;
    }
};
