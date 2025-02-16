import { useEffect, useState } from 'react';
import { getActivities } from '../services/activityService.ts';
import React from 'react';


const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        const data = await getActivities();
        setActivities(data);
    };

    return (
        <ul>
            {activities.map((activity: any) => (
                <li key={activity.id}>{activity.name} - {new Date(activity.startTime).toLocaleString()} to {new Date(activity.endTime).toLocaleString()}</li>
            ))}
        </ul>
    );
};

export default ActivityList;
