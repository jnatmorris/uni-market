import { LoginHandler_PropType } from "@Login/index";
import { LoginUser } from "@auth/index";

export const loginHandler = (props: LoginHandler_PropType): void => {
    const {
        setInvalidPassword,
        setInvalidUsername,
        setTooManyReq,
        setAttemptLogin,
        email,
        password,
        setUser,
        loginErrorHandler,
    } = props;

    setInvalidPassword(false);
    setInvalidUsername(false);
    setTooManyReq(false);
    setAttemptLogin(true);
    LoginUser(
        email,
        password,
        setUser,
        loginErrorHandler,
        setAttemptLogin,
        setInvalidPassword,
        setInvalidUsername,
        setTooManyReq
    );
};
