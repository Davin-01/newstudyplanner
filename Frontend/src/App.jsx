import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import SubjectDetail from "./Pages/SubjectDetail"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
      </Routes>
    </Router>
  );
};
export default App;