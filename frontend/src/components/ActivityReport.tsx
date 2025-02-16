import React from "react";

const ActivityReport = ({ report }: { report: { [key: string]: number } }) => {
    return (
        <div style={{
            maxWidth: '1200px',
            margin: '40px auto',
            padding: '30px',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            borderRadius: '16px',
            border: '1px solid #eaeaea'
        }}>
            <h2 style={{
                color: '#1a1a1a',
                textAlign: 'center',
                marginBottom: '30px',
                fontSize: '28px',
                fontWeight: '600',
                letterSpacing: '-0.5px'
            }}>Relatório de Tempo Gasto</h2>

            <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '0',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
                        <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '15px', fontWeight: '600', color: '#495057' }}>Data</th>
                        <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '15px', fontWeight: '600', color: '#495057' }}>Tempo Gasto (Horas)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(report).length === 0 ? (
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'center', padding: '24px', color: '#868e96', fontSize: '15px', fontStyle: 'italic' }}>
                                Nenhuma atividade registrada ainda.
                            </td>
                        </tr>
                    ) : (
                        Object.entries(report).map(([date, hours]) => (
                            <tr key={date} style={{ borderBottom: '1px solid #e9ecef' }}>
                                <td style={{ padding: '16px 24px', fontSize: '14px', color: '#495057' }}>{date}</td>
                                <td style={{ padding: '16px 24px', fontSize: '14px', color: '#495057', fontWeight: '500' }}>{hours.toFixed(2)} hrs</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ActivityReport;
