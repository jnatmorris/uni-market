import { ResetPassword } from "@auth/index";
import { resetPasswordHandler_PropType } from "@Login/index";

export const resetPassHandler = (
    props: resetPasswordHandler_PropType
): void => {
    const { email, setInvalidUsername, setSentNewPassEmail } = props;

    // https://www.emailregex.com/
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
        setInvalidUsername(true);
        return;
    }

    ResetPassword(email, setSentNewPassEmail);
};
