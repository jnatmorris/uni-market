import { GetURLPropsHandler_PropType } from "@newPass/index";
import { getAuth, verifyPasswordResetCode } from "firebase/auth";

export const getURLPropsHandler = (props: GetURLPropsHandler_PropType) => {
    const { setActionCode, setEmail, setError_BadLink } = props;

    const urlParams = new URLSearchParams(window.location.href);
    const oobCodeTest = urlParams.get("oobCode");

    if (oobCodeTest) {
        setActionCode(oobCodeTest);
        const auth = getAuth();

        verifyPasswordResetCode(auth, oobCodeTest)
            .then((resEmail) => {
                setEmail(resEmail);
                setError_BadLink(false);
            })
            .catch(() => {
                setError_BadLink(true);
            });
    }
};
