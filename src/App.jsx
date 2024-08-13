import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('bg-black', 'text-white');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.classList.remove('bg-black', 'text-white');
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // Alert will disappear after 3 seconds
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  return (
    <div>
      <Navbar title="TextInsight" mode={mode} toggleMode={toggleMode} />
      <Alert message={alert?.message} mode={mode} onClose={handleAlertClose} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </div>
  );
}

export default App;

