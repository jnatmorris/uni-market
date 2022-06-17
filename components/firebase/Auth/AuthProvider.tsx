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

// create auth context
const AuthContext = React.createContext<ContextProps>({
    user: null,
    setUser: (vale: User | null) => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = React.useState<User | null>(null);

    // on page load, get info
    React.useEffect(() => {
        GetCurrentInfo(app, setUser);
    }, []);

    // context to be passed down
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
