// src/pages/SubjectDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from '../components/TaskList';
import ProgressBar from '../components/ProgressBar';

const SubjectDetails = () => {
  const { id } = useParams();
  const [subject, setSubject] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchSubjectDetails();
    fetchProgress();
  }, [id]);

  const fetchSubjectDetails = async () => {
    try {
      const response = await api.get(`/subjects/${id}/`);
      setSubject(response.data);
    } catch (error) {
      console.error('Error fetching subject details:', error);
    }
  };

  const fetchProgress = async () => {
    try {
      const response = await api.get(`/progress/?subject_id=${id}`);
      const completedTasks = response.data.filter(task => task.is_completed).length;
      const totalTasks = response.data.length;
      setProgress(totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0);
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{subject.title || 'Subject Details'}</h1>
      <p>{subject.description}</p>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Tasks</h2>
        <TaskList subjectId={id} />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold">Progress</h2>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default SubjectDetails;
