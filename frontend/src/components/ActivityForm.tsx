import { useState } from 'react';
import { addActivity } from '../services/activityService.ts';
import React from 'react';


const ActivityForm = ({ onActivityAdded }: { onActivityAdded: () => void }) => {
    const [name, setName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addActivity(name, startTime, endTime);
        onActivityAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome da Atividade" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default ActivityForm;
