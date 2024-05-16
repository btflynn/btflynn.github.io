import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App />, container);


import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;