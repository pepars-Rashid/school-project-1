"use client"

import { useState, useEffect } from 'react';
import StudentHome from './home/student-home';
import StudentPlanner from './student-planner/student-planner';
import StudentBar from './Student-bar';

export default function StudentDashboard() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    StudentHome()
    StudentPlanner()
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <StudentHome/>;
      case 'StudentPlanner':
        return <StudentPlanner/>;
      // case 'settings':
      //   return <Settings />;
      default:
        return <StudentHome/>;
    }
  };

  return (
    <div className='w-full'>
      {renderSection()}
      <StudentBar activeactiveSection={activeSection} setActiveSection={setActiveSection}/>
    </div>
  )
}
