import { newPassHandler_PropType2 } from "@newPass/index";

export const newPassHandler2 = (props: newPassHandler_PropType2): void => {
    const { setError_ShortPass, setError_PassNotSame, setNewPassInput2, e } =
        props;

    setError_ShortPass(false);
    setError_PassNotSame(false);
    setNewPassInput2(e.target.value);
};
