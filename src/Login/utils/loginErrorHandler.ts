import { loginErrorHandler_PropType } from "@Login/index";

export const loginErrorHandler = (props: loginErrorHandler_PropType): void => {
    const {
        setAttemptLogin,
        errorCode,
        setInvalidUsername,
        setInvalidPassword,
        setTooManyReq,
    } = props;

    setAttemptLogin(false);
    switch (errorCode) {
        case "auth/invalid-email":
            setInvalidUsername(true);

            break;

        case "auth/user-not-found":
            setInvalidUsername(true);
            break;

        case "auth/wrong-password":
            setInvalidPassword(true);
            break;

        case "auth/too-many-requests":
            setTooManyReq(true);

        default:
            break;
    }
};
