// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>

//   )
// }

// import React from 'react';

// import NeuralInputMonitor from './components/NeuralInputMonitor';
// import EmotionalStateMonitor from './components/EmotionalStateMonitor';
// import HapticFeedbackSimulator from './components/HapticFeedbackSimulator';
// import VRInterface from './components/VRInterface';
// import HealthMonitor from './components/HealthMonitor';
// import SettingsPanel from './components/SettingsPanel';

// export default function App() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>

//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold mb-6">Neural Interface Game Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <NeuralInputMonitor />
//           <EmotionalStateMonitor />
//           <HapticFeedbackSimulator />
//           <br/>
//           <VRInterface />
//           <HealthMonitor />
//           <SettingsPanel />
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import NeuralInputMonitor from './components/NeuralInputMonitor';
import EmotionalStateMonitor from './components/EmotionalStateMonitor';
import HapticFeedbackSimulator from './components/HapticFeedbackSimulator';
import VRARInterface from './components/VRARInterface';
import HealthMonitor from './components/HealthMonitor';
import SettingsPanel from './components/SettingsPanel';

export default function App() {
  // 设置状态
  const [settings, setSettings] = useState({
    fontSize: 16,
    themeColor: '#1DA57A',
    brightness: 100,
    volume: 50
  });

  // 处理设置更改
  const handleSettingsChange = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Neural Interface Game Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 传递设置到各个组件 */}
          <div style={{ fontSize: settings.fontSize }}>
            <NeuralInputMonitor />
            <EmotionalStateMonitor />
            <HapticFeedbackSimulator />
            <VRARInterface />
            <HealthMonitor />
          </div>
          {/* 将设置面板传递到 SettingsPanel 组件 */}
          <SettingsPanel onSettingsChange={handleSettingsChange} />
        </div>
      </div>
    </div>
  );
}
