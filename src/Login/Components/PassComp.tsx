import React from "react";
import {
    passwordHandler,
    showPasswordHandler,
    PassComp_PropType,
} from "@Login/index";

export const PassComp: React.FC<PassComp_PropType> = ({
    invalidPassword,
    showPassword,
    setPassword,
    setInvalidPassword,
    setTooManyReq,
    setSentNewPassEmail,
    setShowPassword,
}) => {
    return (
        <div>
            {invalidPassword ? (
                <p className="text-red-500">Incorrect Password</p>
            ) : (
                <p>Password</p>
            )}

            <div className="relative block ">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={"Password"}
                    className={
                        (invalidPassword
                            ? "ring-red-500 outline-none"
                            : "ring-slate-400") +
                        " px-2 py-1 pr-16 rounded-md ring-2 w-full"
                    }
                    onChange={(e) =>
                        passwordHandler({
                            e,
                            setPassword,
                            setInvalidPassword,
                            setTooManyReq,
                            setSentNewPassEmail,
                        })
                    }
                />

                <button
                    className="absolute text-base inset-y-0 flex items-center pl-2 right-1.5 hover:opacity-80"
                    onClick={() =>
                        showPasswordHandler({ setShowPassword, showPassword })
                    }
                >
                    {showPassword ? "hide" : "show"}
                </button>
            </div>
        </div>
    );
};
