import React from "react";
import { resetPassHandler, NewPassComp_PropType } from "@Login/index";

export const NewPassComp: React.FC<NewPassComp_PropType> = ({
    sentNewPassEmail,
    tooManyReq,
    email,
    setInvalidUsername,
    setSentNewPassEmail,
}) => {
    return (
        <div>
            {sentNewPassEmail ? (
                <p className="pb-2 text-black">Email has been sent</p>
            ) : (
                <button
                    className="pb-2 text-blue-600"
                    onClick={() =>
                        resetPassHandler({
                            email,
                            setInvalidUsername,
                            setSentNewPassEmail,
                        })
                    }
                >
                    Forgot password
                </button>
            )}

            {tooManyReq && (
                <p className="text-red-500">
                    Too many attempts. Try again in a minute.
                </p>
            )}
        </div>
    );
};
