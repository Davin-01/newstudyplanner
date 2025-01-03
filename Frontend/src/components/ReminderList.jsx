
// src/components/ReminderList.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ReminderList = ({ userId }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetchReminders();
  }, [userId]);

  const fetchReminders = async () => {
    try {
      const response = await api.get(`/reminders/?user_id=${userId}`);
      setReminders(response.data);
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Reminders</h2>
      <ul className="list-disc pl-6">
        {reminders.map(reminder => (
          <li key={reminder.id}>
            {reminder.message} - {reminder.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderList;
