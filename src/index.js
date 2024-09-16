import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export { default as CharacterStatus } from './game-components/CharacterStatus';
export { default as DialogueBox } from './game-components/DialogueBox';
export { default as Inventory } from './game-components/Inventory';
export { default as MiniMap } from './game-components/MiniMap';
export { default as Navigation } from './game-components/Navigation';
export { default as QuestLog } from './game-components/QuestLog';

export { default as EmotionalStateMonitor } from './monitor-components/EmotionalStateMonitor';
export { default as HapticFeedbackSimulator } from './monitor-components/HapticFeedbackSimulator';
export { default as HealthMonitor } from './monitor-components/HealthMonitor';
export { default as NeuralInputMonitor } from './monitor-components/NeuralInputMonitor';
export { default as SettingsPanel } from './monitor-components/SettingsPanel';
export { default as VRARInterface } from './monitor-components/VRARInterface';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
