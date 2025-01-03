import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-300 rounded-lg h-4">
            <div 
            className="bg-green-500 h-4 rounded-lg"
            style={{ width: `${progress}%` }}
            />
        </div>
    );
};
export default ProgressBar;