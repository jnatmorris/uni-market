import { showPasswordHandler_PropType } from "@Login/index";

export const showPasswordHandler = (
    props: showPasswordHandler_PropType
): void => {
    const { setShowPassword, showPassword } = props;
    setShowPassword(!showPassword);
};
