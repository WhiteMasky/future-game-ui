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

import React from 'react';

import NeuralInputMonitor from './components/NeuralInputMonitor';
import EmotionalStateMonitor from './components/EmotionalStateMonitor';
import HapticFeedbackSimulator from './components/HapticFeedbackSimulator';
import VRInterface from './components/VRInterface';
// import HealthMonitor from './HealthMonitor';

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Neural Interface Game Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NeuralInputMonitor />
          <EmotionalStateMonitor />
          <HapticFeedbackSimulator />
          <br/>
          <VRInterface />
          {/* <HealthMonitor /> */}
        </div>
      </div>
    </div>
  );
}
