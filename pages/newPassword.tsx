import React from "react";
import {
    getAuth,
    confirmPasswordReset,
    verifyPasswordResetCode,
} from "firebase/auth";
import Link from "next/link";
import MetaTags from "../src/Components/Metatags";

const NewPassword: React.FC = () => {
    // email of user
    const [email, setEmail] = React.useState<string>("");

    // password inputs
    const [newPassInput, setNewPassInput] = React.useState<string>("");
    const [newPassInput2, setNewPassInput2] = React.useState<string>("");

    const [OobCode, setOobCode] = React.useState<string>("");

    // error states
    const [error_ShortPass, setError_ShortPass] =
        React.useState<boolean>(false);
    const [error_BadLink, setError_BadLink] = React.useState<boolean | string>(
        "loading"
    );
    const [error_PassNotSame, setError_PassNotSame] =
        React.useState<boolean>(false);

    const newPassHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setError_ShortPass(false);
        setError_PassNotSame(false);

        setNewPassInput(e.target.value);
    };
    const newPassHandler2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setError_ShortPass(false);
        setError_PassNotSame(false);
        setNewPassInput2(e.target.value);
    };

    const setNewPass = (): void => {
        if (newPassInput.length <= 6 || newPassInput !== newPassInput2) {
            if (newPassInput.length <= 6) setError_ShortPass(true);

            if (newPassInput !== newPassInput2) setError_PassNotSame(true);
        } else {
            const auth = getAuth();
            confirmPasswordReset(auth, OobCode, newPassInput)
                .then(() => {
                    console.log("test");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(error.code);
                    errorMessage(errorCode);
                });
        }

        // if passwords are not same
        if (newPassInput !== newPassInput2) {
            errorMessage("diff-passes");
        } else {
            setError_PassNotSame(false);
        }
    };

    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.href);
        const oobCodeTest = urlParams.get("oobCode");

        if (oobCodeTest) setOobCode(oobCodeTest);

        const auth = getAuth();

        verifyPasswordResetCode(auth, OobCode)
            .then((email) => {
                setEmail(email);
            })
            .catch((error) => {
                // console.log(error);
                errorMessage(error.code);
            });
    }, []);

    // error handling
    const errorMessage = (errorCode: string): void => {
        switch (errorCode) {
            // if user password is less than 6 charictors
            case "auth/weak-password":
                // should never be run as handled client side, but just in case
                setError_ShortPass(true);
                break;

            // invalid or expired action code for password reset
            case "auth/invalid-action-code":
                setError_BadLink(true);
                break;

            case "diff-passes":
                setError_PassNotSame(true);
                break;

            default:
                break;
        }
    };

    return (
        <>
            <MetaTags title={"Update Password"} />
            <div className="mt-[18vh] flex justify-center">
                <div className="p-[5vw] rounded-3xl shadow-xl space-y-[4vh] w-[32vw]">
                    {error_BadLink === "loading" ? (
                        <h1>Loading</h1>
                    ) : !error_BadLink ? (
                        <div>
                            <h1>Lost?</h1>
                            <Link href={"/"} passHref>
                                <div className="flex space-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <a className="no-underline cursor-pointer">
                                        Back Home
                                    </a>
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <h1 className="pl-[2%]">
                                Update the password for {email}
                            </h1>

                            {error_ShortPass || error_PassNotSame ? (
                                <ul className="text-red-500">
                                    {error_ShortPass && (
                                        <li>
                                            Password is not greater than legnth
                                            5
                                        </li>
                                    )}
                                    {error_PassNotSame && (
                                        <li>Passwords do not match</li>
                                    )}
                                </ul>
                            ) : (
                                <></>
                            )}
                            <div className="grid grid-cols-1 gap-y-4">
                                <div className="space-y-[0.75vh]">
                                    <label htmlFor="password">
                                        Set password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder={"New Password"}
                                        onChange={(e) => newPassHandler(e)}
                                        className="w-full px-2 py-1 rounded-md ring-slate-400 ring-2 focus:ring-0"
                                    />
                                </div>
                                <div className="space-y-[0.75vh]">
                                    <label htmlFor="passwordConfirm">
                                        Confirm password
                                    </label>
                                    <input
                                        name="passwordConfirm"
                                        type={"password"}
                                        placeholder={"Confirm password"}
                                        className={
                                            "ring-slate-400 px-2 py-1 rounded-md ring-2 w-full focus:ring-0"
                                        }
                                        value={newPassInput2}
                                        onChange={(e) => newPassHandler2(e)}
                                    />
                                </div>

                                <div className="mt-2">
                                    <div className="h-0.5 mx-0 mb-3 rounded-full bg-slate-300/80" />

                                    <button
                                        className={
                                            (error_PassNotSame ||
                                            error_ShortPass
                                                ? "cursor-not-allowed opacity-80 ring-blue-500/50 hover:bg-blue-500/50"
                                                : "cursor-pointer hover:bg-blue-500 ring-blue-500") +
                                            " px-4 py-1.5 w-full hover:text-white ring-2 rounded-2xl"
                                        }
                                        onClick={() => setNewPass()}
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default NewPassword;
