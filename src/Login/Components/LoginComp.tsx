import React from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@providers/AuthProvider";
import { LoginBtnComp, EmailComp, NewPassComp, PassComp } from "@Login/index";

export const LoginComp: React.FC = () => {
    const { user, setUser } = React.useContext(AuthContext);

    // email and password
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    // show password
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    // error states
    const [invalidUsername, setInvalidUsername] =
        React.useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] =
        React.useState<boolean>(false);
    const [tooManyReq, setTooManyReq] = React.useState<boolean>(false);
    const [sentNewPassEmail, setSentNewPassEmail] =
        React.useState<boolean>(false);

    // track if user has attemped to show progress spinner
    const [attempLogin, setAttemptLogin] = React.useState<boolean>(false);
    const router = useRouter();

    React.useEffect(() => {
        user ? router.push("/") : null;
    }, [user]);

    return (
        <div className="pt-[16vh] flex justify-center">
            <div className="p-[5vw] rounded-3xl shadow-xl space-y-[4vh] w-[32vw]">
                <h1 className="pl-[2%]">Login</h1>
                <div className="grid grid-cols-1 gap-y-4">
                    <EmailComp
                        setEmail={setEmail}
                        setInvalidUsername={setInvalidUsername}
                        invalidUsername={invalidUsername}
                        setTooManyReq={setTooManyReq}
                        setSentNewPassEmail={setSentNewPassEmail}
                    />
                    <PassComp
                        invalidPassword={invalidPassword}
                        showPassword={showPassword}
                        setPassword={setPassword}
                        setInvalidPassword={setInvalidPassword}
                        setTooManyReq={setTooManyReq}
                        setSentNewPassEmail={setSentNewPassEmail}
                        setShowPassword={setShowPassword}
                    />

                    <div className="mt-2">
                        <div className="h-0.5 mx-0 mb-3 rounded-full bg-slate-300/80" />

                        <NewPassComp
                            email={email}
                            setInvalidUsername={setInvalidUsername}
                            setSentNewPassEmail={setSentNewPassEmail}
                            sentNewPassEmail={sentNewPassEmail}
                            tooManyReq={tooManyReq}
                        />

                        <LoginBtnComp
                            email={email}
                            password={password}
                            setInvalidPassword={setInvalidPassword}
                            setInvalidUsername={setInvalidUsername}
                            setTooManyReq={setTooManyReq}
                            setAttemptLogin={setAttemptLogin}
                            setUser={setUser}
                            attempLogin={attempLogin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
