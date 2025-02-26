import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm.tsx";

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/dashboard"); 
        }
    }, []);

    return <RegisterForm />;
};

export default Register;
