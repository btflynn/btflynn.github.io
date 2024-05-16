
import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (!root) throw new Error('No root element found');
root.render(<App />);