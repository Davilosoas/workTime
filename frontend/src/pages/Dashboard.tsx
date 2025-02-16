import React, { useEffect, useState } from "react";
import { getActivities, addActivity, deleteActivity, getReport } from "../services/activityService";
import ActivityReport from "../components/ActivityReport";
import { useNavigate } from "react-router-dom";

// Add this interface near the top of the file
interface Activity {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
}

const Dashboard = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [report, setReport] = useState<{ [key: string]: number }>({});
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const navigate = useNavigate();
    
    useEffect(() => {
        loadActivities();
        loadReport();
    }, []);

    const loadActivities = async () => {
        const data = await getActivities();
        setActivities(data);
    };

    const loadReport = async () => {
        const data = await getReport();
        setReport(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addActivity(name, startTime, endTime);
        setName("");
        setStartTime("");
        setEndTime("");
        await loadActivities();
        await loadReport();
    };

    const handleDelete = async (id: number) => {
        await deleteActivity(id);
        await loadActivities();
        await loadReport();
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login"); 
    };

    return (
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ color: '#333' }}>Gerenciar Atividades</h2>
                <button 
                    onClick={handleLogout} 
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#6c757d',
                        color: '#ffffff',
                        border: '1px solid #6c757d',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '13px',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 1px 3px rgba(108, 117, 125, 0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.3px'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#5a6268';
                        e.currentTarget.style.borderColor = '#545b62';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(108, 117, 125, 0.2)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#6c757d';
                        e.currentTarget.style.borderColor = '#6c757d';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 1px 3px rgba(108, 117, 125, 0.2)';
                    }}>
                    Logout
                </button>
            </div>

            <form onSubmit={handleSubmit} style={{
                display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px'
            }}>
                <input type="text" placeholder="Nome da atividade" value={name} 
                    onChange={(e) => setName(e.target.value)} required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                />
                <input type="datetime-local" value={startTime} 
                    onChange={(e) => setStartTime(e.target.value)} required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                />
                <input type="datetime-local" value={endTime} 
                    onChange={(e) => setEndTime(e.target.value)} required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                />
                <button type="submit" style={{
                    padding: '12px', backgroundColor: '#4CAF50', color: 'white', 
                    border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
                }}>Adicionar Atividade</button>
            </form>

            <h3 style={{ color: '#444', marginBottom: '20px' }}>Atividades</h3>
            <table style={{
                width: '100%', borderCollapse: 'collapse', backgroundColor: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Nome</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Início</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Fim</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity) => (
                        <tr key={activity.id} style={{ borderBottom: '1px solid #ddd' }}>
                            <td style={{ padding: '12px' }}>{activity.name}</td>
                            <td style={{ padding: '12px' }}>{new Date(activity.startTime).toLocaleString()}</td>
                            <td style={{ padding: '12px' }}>{new Date(activity.endTime).toLocaleString()}</td>
                            <td style={{ padding: '12px' }}>
                                <button onClick={() => handleDelete(activity.id)}
                                    style={{
                                        padding: '8px 12px', backgroundColor: '#ff4444', color: 'white', 
                                        border: 'none', borderRadius: '4px', cursor: 'pointer'
                                    }}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ActivityReport report={report} />
        </div>
    );
};

export default Dashboard;
