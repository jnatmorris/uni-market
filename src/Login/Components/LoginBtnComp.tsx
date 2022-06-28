import React from "react";
import { LoadingSpinner } from "@LoadingSpinner/LoadingSpinner";
import {
    loginHandler,
    loginErrorHandler,
    LoginBtnComp_PropType,
} from "@Login/index";

export const LoginBtnComp: React.FC<LoginBtnComp_PropType> = ({
    email,
    password,
    setInvalidPassword,
    setInvalidUsername,
    setTooManyReq,
    setAttemptLogin,
    setUser,

    attempLogin,
}) => {
    return (
        <button
            disabled={!(email && password)}
            className={
                (email && password
                    ? "cursor-pointer bg-blue-500"
                    : "cursor-not-allowed opacity-80  bg-blue-500/50") +
                " px-4 py-1.5 h-10  w-full  rounded-2xl"
            }
            onClick={() =>
                loginHandler({
                    setAttemptLogin,
                    setInvalidPassword,
                    setInvalidUsername,
                    setTooManyReq,
                    email,
                    password,
                    setUser,
                    loginErrorHandler,
                })
            }
        >
            {attempLogin ? (
                <div className="flex justify-center h-full space-x-3">
                    <LoadingSpinner />
                    <h3 className="text-white">Processing...</h3>
                </div>
            ) : (
                <h3 className="text-white">Login</h3>
            )}
        </button>
    );
};
