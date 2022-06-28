import { User } from "firebase/auth";
import { NextRouter } from "next/router";

interface newPassHandler_PropType {
    e: React.ChangeEvent<HTMLInputElement>;
    setError_ShortPass: (value: React.SetStateAction<boolean>) => void;
    setError_PassNotSame: (value: React.SetStateAction<boolean>) => void;
    setNewPassInput: (value: React.SetStateAction<string>) => void;
}

interface newPassHandler_PropType2 {
    e: React.ChangeEvent<HTMLInputElement>;
    setError_ShortPass: (value: React.SetStateAction<boolean>) => void;
    setError_PassNotSame: (value: React.SetStateAction<boolean>) => void;
    setNewPassInput2: (value: React.SetStateAction<string>) => void;
}

interface setNewPassHandler_PropType {
    newPassInput: string;
    newPassInput2: string;
    setError_ShortPass: (value: React.SetStateAction<boolean>) => void;
    setError_PassNotSame: (value: React.SetStateAction<boolean>) => void;
    actionCode: string;
    email: string;
    setUser: (value: User | null) => void;
    router: NextRouter;
    setError_BadLink: (value: React.SetStateAction<string | boolean>) => void;
    errorMessageHandler: (props: errorMessageHandler_PropType) => void;
}

interface errorMessageHandler_PropType {
    errorCode: string;
    setError_ShortPass: (value: React.SetStateAction<boolean>) => void;
    setError_BadLink: (value: React.SetStateAction<string | boolean>) => void;
    setError_PassNotSame: (value: React.SetStateAction<boolean>) => void;
}

interface GetURLPropsHandler_PropType {
    setActionCode: (value: React.SetStateAction<string>) => void;
    setEmail: (value: React.SetStateAction<string>) => void;
    setError_BadLink: (value: React.SetStateAction<string | boolean>) => void;
}

export type {
    newPassHandler_PropType,
    newPassHandler_PropType2,
    setNewPassHandler_PropType,
    errorMessageHandler_PropType,
    GetURLPropsHandler_PropType,
};
