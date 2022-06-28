import { passwordHandler_PropType } from "@Login/index";

export const passwordHandler = (props: passwordHandler_PropType): void => {
    const {
        e,
        setPassword,
        setInvalidPassword,
        setTooManyReq,
        setSentNewPassEmail,
    } = props;
    setPassword(e.target.value);
    // clean errors and email sent notification
    setInvalidPassword(false);
    setTooManyReq(false);
    setSentNewPassEmail(false);
};
