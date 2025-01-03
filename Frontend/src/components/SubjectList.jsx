import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Link from "react-router-dom";

const SubjectList = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchsubjects();
    }, []);

    const fetchsubjects = async () => {
        try {
            const response = await api.get('/subjects');
            setSubjects(response.data);
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Subjects</h2>
            <ul className="list-disc pl-6">
                {subjects.map((subject) => (
                    <li key={subject.id}>
                        <Link to={`/subject/${subject.id}`} className="text-blue-500">{subject.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubjectList;