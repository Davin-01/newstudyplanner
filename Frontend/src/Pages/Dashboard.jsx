import React from 'react';
import SubjectList from '../components/SubjectList';

const Dashboard = () => {
    return (
        <div className='p-4'>
            <h1 className="text-2xl font-bold mb-4">Study Planner Dashboard</h1>
            <SubjectList />
        </div>
    );
};

export default Dashboard;