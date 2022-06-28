import React from "react";
import { emailHandler, EmailComp_PropType } from "@Login/index";

export const EmailComp: React.FC<EmailComp_PropType> = ({
    invalidUsername,
    setInvalidUsername,
    setTooManyReq,
    setEmail,
    setSentNewPassEmail,
}) => {
    return (
        <div>
            {invalidUsername ? (
                <p className="text-red-500">Invalid email</p>
            ) : (
                <p>Email</p>
            )}

            <input
                className={
                    (invalidUsername
                        ? "ring-red-500 outline-none"
                        : "ring-slate-400") +
                    " px-2 py-1 rounded-md ring-2 w-full "
                }
                type="email"
                placeholder={"Email"}
                onChange={(e) =>
                    emailHandler({
                        e,
                        setEmail,
                        setInvalidUsername,
                        setTooManyReq,
                        setSentNewPassEmail,
                    })
                }
            />
        </div>
    );
};
