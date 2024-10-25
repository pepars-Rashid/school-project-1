"use client";

import { useState, useEffect } from 'react';

// Components for each section
const Info = () => <div>Info Section</div>;
const Notifications = () => <div>Notifications Section</div>;
const Settings = () => <div>Settings Section</div>;

export default function DashboardCon() {
  const [activeSection, setActiveSection] = useState('info');

  // Load all sections when dashboard mounts
  useEffect(() => {
    Info();
    Notifications();
    Settings();
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'info':
        return <Info />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <Info />;
    }
  };

  return (
    <div>
      <nav className="flex space-x-4">
        <button onClick={() => setActiveSection('info')}>Info</button>
        <button onClick={() => setActiveSection('notifications')}>Notifications</button>
        <button onClick={() => setActiveSection('settings')}>Settings</button>
      </nav>
      <div className="mt-4">
        {renderSection()}
      </div>
    </div>
  );
}
