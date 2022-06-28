// components
import { LoginComp } from "./Components/LoginComp";
import { EmailComp } from "./Components/EmailComp";
import { LoginBtnComp } from "./Components/LoginBtnComp";
import { NewPassComp } from "./Components/NewPassComp";
import { PassComp } from "./Components/PassComp";

// handlers
import { loginHandler } from "./utils/loginHandler";
import { emailHandler } from "./utils/emailHandler";
import { passwordHandler } from "./utils/passwordHandler";
import { showPasswordHandler } from "./utils/showPassword";
import { loginErrorHandler } from "./utils/loginErrorHandler";
import { resetPassHandler } from "./utils/resetPassHandler";

// types
import {
    LoginHandler_PropType,
    emailHandler_PropType,
    passwordHandler_PropType,
    showPasswordHandler_PropType,
    resetPasswordHandler_PropType,
    loginErrorHandler_PropType,
    EmailComp_PropType,
    LoginBtnComp_PropType,
    PassComp_PropType,
    NewPassComp_PropType,
} from "./Types/Types";

// components
export { LoginComp, EmailComp, LoginBtnComp, NewPassComp, PassComp };

// functions
export {
    loginHandler,
    emailHandler,
    passwordHandler,
    showPasswordHandler,
    resetPassHandler,
    loginErrorHandler,
};

// types
export type {
    LoginHandler_PropType,
    emailHandler_PropType,
    passwordHandler_PropType,
    showPasswordHandler_PropType,
    resetPasswordHandler_PropType,
    loginErrorHandler_PropType,
    EmailComp_PropType,
    LoginBtnComp_PropType,
    PassComp_PropType,
    NewPassComp_PropType,
};
