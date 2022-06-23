import React from "react";

import { LoginUser, ResetPassword, AuthContext } from "@auth/index";
import MetaTags from "../src/Components/Metatags";
import { useRouter } from "next/router";

const Login: React.FC = () => {
    const { user, setUser } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [invalidUsername, setInvalidUsername] =
        React.useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] =
        React.useState<boolean>(false);
    const [tooManyReq, setTooManyReq] = React.useState<boolean>(false);
    const [sentNewPassEmail, setSentNewPassEmail] =
        React.useState<boolean>(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        setInvalidUsername(false);
        setTooManyReq(false);
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        setInvalidPassword(false);
        setTooManyReq(false);
    };

    const showPasswordHandler = (): void => {
        setShowPassword(!showPassword);
    };

    const loginHandler = (): void => {
        setInvalidPassword(false);
        setInvalidUsername(false);
        setTooManyReq(false);
        LoginUser(email, password, setUser, loginErrorHandler);
    };

    const loginErrorHandler = (errorCode: string): void => {
        switch (errorCode) {
            case "auth/invalid-email":
                setInvalidUsername(true);
                break;

            case "auth/user-not-found":
                setInvalidUsername(true);
                break;

            case "auth/wrong-password":
                setInvalidPassword(true);
                break;

            case "auth/too-many-requests":
                setTooManyReq(true);

            default:
                break;
        }
    };
    const router = useRouter();

    React.useEffect(() => {
        user ? router.push("/") : null;
    }, [user]);

    return (
        <>
            <MetaTags title={"login"} />
            <div className="mt-[18vh] flex justify-center">
                <div className="p-[5vw] rounded-3xl shadow-xl space-y-[4vh] w-[32vw]">
                    <h1 className="pl-[2%]">Login</h1>
                    <div className="grid grid-cols-1 gap-y-4">
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
                                onChange={(e) => emailHandler(e)}
                            />
                        </div>
                        <div>
                            {invalidPassword ? (
                                <p className="text-red-500">
                                    Incorrect Password
                                </p>
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
                                        " px-2 py-1 rounded-md ring-2 w-full"
                                    }
                                    onChange={(e) => passwordHandler(e)}
                                />

                                <button
                                    className="absolute text-base inset-y-0 flex items-center pl-2 right-1.5 hover:opacity-80"
                                    onClick={showPasswordHandler}
                                >
                                    {showPassword ? "hide" : "show"}
                                </button>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="h-0.5 mx-0  mb-3 rounded-full bg-slate-300/80" />
                            <button
                                className="mb-2 text-blue-600"
                                onClick={() =>
                                    ResetPassword(email, setSentNewPassEmail)
                                }
                            >
                                Forgot password
                            </button>
                            {sentNewPassEmail && <p>Sent new password</p>}

                            {tooManyReq && (
                                <p className="text-red-500">
                                    Too many attempts. Try again in a minute.
                                </p>
                            )}
                            <button
                                disabled={!(email && password)}
                                className={
                                    (email && password
                                        ? "cursor-pointer hover:bg-blue-500 ring-blue-500"
                                        : "cursor-not-allowed opacity-80 ring-blue-500/50 hover:bg-blue-500/50") +
                                    " px-4 py-1.5  w-full hover:text-white  ring-2 rounded-2xl"
                                }
                                onClick={loginHandler}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
