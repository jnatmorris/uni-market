import { User } from "firebase/auth";

interface LoginHandler_PropType {
    setAttemptLogin: (value: React.SetStateAction<boolean>) => void;
    setInvalidPassword: (value: React.SetStateAction<boolean>) => void;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    email: string;
    password: string;
    setUser: (value: User | null) => void;
    loginErrorHandler: ({}: loginErrorHandler_PropType) => void;
}

interface emailHandler_PropType {
    e: React.ChangeEvent<HTMLInputElement>;
    setEmail: (value: React.SetStateAction<string>) => void;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
}

interface passwordHandler_PropType {
    e: React.ChangeEvent<HTMLInputElement>;
    setPassword: (value: React.SetStateAction<string>) => void;
    setInvalidPassword: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
}

interface showPasswordHandler_PropType {
    setShowPassword: (value: React.SetStateAction<boolean>) => void;
    showPassword: boolean;
}

interface resetPasswordHandler_PropType {
    email: string;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
}

interface loginErrorHandler_PropType {
    errorCode: string;
    setAttemptLogin: (value: React.SetStateAction<boolean>) => void;
    setInvalidPassword: (value: React.SetStateAction<boolean>) => void;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
}

interface EmailComp_PropType {
    invalidUsername: boolean;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    setEmail: (value: React.SetStateAction<string>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
}

interface LoginBtnComp_PropType {
    email: string;
    password: string;
    setInvalidPassword: (value: React.SetStateAction<boolean>) => void;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    setAttemptLogin: (value: React.SetStateAction<boolean>) => void;
    setUser: (value: User | null) => void;
    attempLogin: boolean;
}

interface PassComp_PropType {
    invalidPassword: boolean;
    showPassword: boolean;
    setPassword: (value: React.SetStateAction<string>) => void;
    setInvalidPassword: (value: React.SetStateAction<boolean>) => void;
    setTooManyReq: (value: React.SetStateAction<boolean>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
    setShowPassword: (value: React.SetStateAction<boolean>) => void;
}

interface NewPassComp_PropType {
    sentNewPassEmail: boolean;
    tooManyReq: boolean;
    email: string;
    setInvalidUsername: (value: React.SetStateAction<boolean>) => void;
    setSentNewPassEmail: (value: React.SetStateAction<boolean>) => void;
}

// handlers
export type {
    LoginHandler_PropType,
    emailHandler_PropType,
    passwordHandler_PropType,
    showPasswordHandler_PropType,
    resetPasswordHandler_PropType,
    loginErrorHandler_PropType,
};

// components
export type {
    EmailComp_PropType,
    LoginBtnComp_PropType,
    PassComp_PropType,
    NewPassComp_PropType,
};
