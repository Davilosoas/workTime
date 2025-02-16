import React, { createContext, useState, useEffect } from "react";

type AuthContextType = {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
    logout: () => void;
    loading: boolean; 
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setUser(token);
        }
        setLoading(false);
    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser, logout: () => {
            localStorage.removeItem("token");
            setUser(null);
        }, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
