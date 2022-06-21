import React from "react";
import { AuthContext } from "../components/firebase/Auth/AuthProvider";
import { LoginUser } from "../components/firebase/Auth/actions";
import MetaTags from "../components/Metatags";
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

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setInvalidUsername(false);
        setTooManyReq(false);
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setInvalidPassword(false);
        setTooManyReq(false);
    };

    const showPasswordHandler = (): void => {
        setShowPassword(!showPassword);
    };

    const loginHandler = () => {
        setInvalidPassword(false);
        setInvalidUsername(false);
        setTooManyReq(false);
        LoginUser(email, password, setUser, loginErrorHandler);
    };

    const loginErrorHandler = (errorCode: string): void => {
        console.log(errorCode);
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
            <div className="mt-[20vh] flex justify-center">
                <div className="p-[5vw] rounded-3xl shadow-xl space-y-[4vh] w-[32vw]">
                    <h1 className="pl-[2%]">Login</h1>
                    <div className="grid grid-cols-1">
                        <div className="mb-[2vh]">
                            {invalidUsername && (
                                <p className="text-red-500">Invalid email</p>
                            )}

                            <input
                                className={
                                    (invalidUsername
                                        ? "ring-red-500 bg-white"
                                        : "ring-slate-400 bg-slate-100") +
                                    " px-2 py-1 rounded-md  ring-2 focus:ring-0 w-full"
                                }
                                type="email"
                                placeholder={"Email"}
                                onChange={(e) => emailHandler(e)}
                            />
                        </div>
                        <div className="mb-[3vh]">
                            {invalidPassword && (
                                <p className="text-red-500">
                                    Incorrect Password
                                </p>
                            )}

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder={"Password"}
                                className="block w-full py-1 pl-2 pr-16 rounded-md bg-slate-100 ring-2 focus:ring-0 ring-slate-400"
                                onChange={(e) => passwordHandler(e)}
                            />

                            <div className="relative block">
                                <button
                                    className="absolute text-base right-2 bottom-1"
                                    onClick={showPasswordHandler}
                                >
                                    Show
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="h-0.5 mx-0 mt-1 mb-3 rounded-full bg-slate-300/80" />
                            {tooManyReq && (
                                <p className="text-red-500">
                                    Too many attempts. Try again in a minute.
                                </p>
                            )}
                            <button
                                disabled={!(email && password)}
                                className={
                                    (email && password
                                        ? "cursor-pointer"
                                        : "cursor-not-allowed") +
                                    " px-4 py-1.5 ring-blue-500 w-full hover:text-white hover:bg-blue-500 ring-2 rounded-2xl"
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
