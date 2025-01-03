//this will fetch tasks for a specific component
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TaskList = ({ subjectId }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {  
        fetchTasks();
    }, [subjectId]);


    const fetchTasks = async () => {
        try {
            const response = await api.get(`/tasks/?subject_id=${subjectId}`);
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleCreateTask = async () => {
        if (newTask.trim() !== '') return;
            try {
                const response = await api.post     ('/tasks/', { description: newTask, subject_id: subjectId });
                setTasks([...tasks, response.data]);
                setNewTask('');
            } catch (error) {
                console.error('Error creating task:', error);
            }
    };

    return (
        <div>
            <ul className="list-disc pl-6">
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between">
                        <span>{task.description}</span>
                        <button
                            onclick={() => handleDeleteTask(task.id)}
                            className="text-red-500 hover:underline"
                            >
                            Delete
                        </button>
                        </li>
                ))}
            </ul>
            <div className="mt-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="New task Desription"
                />
                <button
                    onClick={handleCreateTask}
                    className="ml-2 bg-blue-500 text-white rounded px-4 py-2"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};
export default TaskList;