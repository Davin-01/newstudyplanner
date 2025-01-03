// src/components/ScheduleList.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ScheduleList = ({ userId }) => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, [userId]);

  const fetchSchedules = async () => {
    try {
      const response = await api.get(`/schedules/?user_id=${userId}`);
      setSchedules(response.data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Schedules</h2>
      <ul className="list-disc pl-6">
        {schedules.map(schedule => (
          <li key={schedule.id}>
            {schedule.title} - {schedule.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
