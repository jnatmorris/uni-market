// import handlers
import { newPassHandler } from "./Utils/newPassHandler";
import { newPassHandler2 } from "./Utils/newPassHandler2";
import { setNewPassHandler } from "./Utils/setNewPassHandler";
import { errorMessageHandler } from "./Utils/errorMessageHandler";
import { getURLPropsHandler } from "./Utils/getURLPropsHandler";

// import types
import {
    newPassHandler_PropType,
    newPassHandler_PropType2,
    setNewPassHandler_PropType,
    errorMessageHandler_PropType,
    GetURLPropsHandler_PropType,
} from "./Types/Types";

// export types
export type {
    newPassHandler_PropType,
    newPassHandler_PropType2,
    setNewPassHandler_PropType,
    errorMessageHandler_PropType,
    GetURLPropsHandler_PropType,
};

// export handlers
export {
    newPassHandler,
    newPassHandler2,
    setNewPassHandler,
    errorMessageHandler,
    getURLPropsHandler,
};
