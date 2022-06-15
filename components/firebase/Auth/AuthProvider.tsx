import React from "react";
import { GetCurrentInfo } from "./actions";
import { User } from "firebase/auth";
import { app } from "../Intialize";

interface ContextProps {
    user: User | null;
    setUser: (value: User | null) => void;
}

interface Props {
    children: React.ReactNode;
}

const AuthContext = React.createContext<ContextProps>({
    user: null,
    setUser: (vale: User | null) => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        GetCurrentInfo(app, setUser);
    }, []);

    React.useEffect(() => {
        console.log("================================");
        console.log("User has changed!");
        console.log(user);
        console.log("================================");
    }, [user]);

    const context = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthProvider;
