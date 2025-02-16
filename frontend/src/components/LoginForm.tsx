import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService.ts";
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); 

        try {
            const data = await login(email, password);

            localStorage.setItem("token", data.token);
            window.location.href = "/dashboard";
        } catch (error: any) {
            console.error("❌ Erro ao fazer login:", error);
            setError(error.response?.data?.message || "Erro ao fazer login");
        }
    };
    return (
           <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '20px'
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '30px',
                fontSize: '32px',
                fontWeight: '600',
                textAlign: 'center'
            }}>Login</h2>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: '400px',
                padding: '30px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <input
                    type="email"
                    className="login-input"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        padding: '14px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '16px'
                    }}
                />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: '14px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '16px'
                    }}
                />
                <button 
                    type="submit"
                    className="login-button"
                    style={{
                        padding: '14px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                >Entrar</button>
            </form>

               <p style={{
                marginTop: '20px',
                fontSize: '14px',
                color: '#666',
                textAlign: 'center'
            }}>
                Ainda não tem uma conta?{" "}
                <button onClick={() => navigate("/register")} style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "14px",
                }}>
                    Registre-se aqui
                </button>
            </p>
            {error && <p style={{ color: "red", textAlign: "center", fontSize: "14px", marginTop: "10px" }}>{error}</p>}

        </div>
    );
};

export default LoginForm;
