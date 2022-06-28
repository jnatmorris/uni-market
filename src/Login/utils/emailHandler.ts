import { emailHandler_PropType } from "@Login/index";

export const emailHandler = (props: emailHandler_PropType): void => {
    const {
        e,
        setEmail,
        setInvalidUsername,
        setTooManyReq,
        setSentNewPassEmail,
    } = props;
    setEmail(e.target.value);
    // clean errors and email sent notification
    setInvalidUsername(false);
    setTooManyReq(false);
    setSentNewPassEmail(false);
};
