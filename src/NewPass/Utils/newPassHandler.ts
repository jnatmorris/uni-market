import { newPassHandler_PropType } from "@newPass/index";

export const newPassHandler = (props: newPassHandler_PropType): void => {
    const { setError_ShortPass, setError_PassNotSame, setNewPassInput, e } =
        props;

    setError_ShortPass(false);
    setError_PassNotSame(false);
    setNewPassInput(e.target.value);
};
