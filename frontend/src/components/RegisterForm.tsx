import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService.ts";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); 

        try {
            const data = await register(name, email, password);

            if (data.token) {
                localStorage.setItem("token", data.token);

                setTimeout(() => {
                    if (localStorage.getItem("token")) {
                        navigate("/dashboard");
                    }
                }, 100);
            }
        } catch (error: any) {
            console.error("❌ Erro ao registrar:", error);
            setError(error.response?.data?.message || "Erro ao registrar usuário");
        }
    };
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            padding: '20px',
            overflow: 'auto'
        }}>
            <h2 style={{
                color: '#333',
                marginBottom: '30px',
                fontSize: '36px',
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: '-0.5px'
            }}>Registrar</h2>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: '400px',
                padding: '35px',
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderRadius: '20px',
                border: '1px solid #eaeaea',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                    style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        fontSize: '16px',
                        transition: 'all 0.2s ease',
                        outline: 'none',
                        backgroundColor: '#f8f9fa'
                    }}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        fontSize: '16px',
                        transition: 'all 0.2s ease',
                        outline: 'none',
                        backgroundColor: '#f8f9fa'
                    }}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        fontSize: '16px',
                        transition: 'all 0.2s ease',
                        outline: 'none',
                        backgroundColor: '#f8f9fa'
                    }}
                />
                <button 
                    type="submit"
                    style={{
                        padding: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        transition: 'all 0.2s ease',
                        marginTop: '10px',
                        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)'
                    }}
                >
                    Registrar
                </button>
            </form>
                        {error && <p style={{ color: "red", textAlign: "center", fontSize: "14px", marginTop: "10px" }}>{error}</p>}

        </div>
        
        
    );
};

export default RegisterForm;
