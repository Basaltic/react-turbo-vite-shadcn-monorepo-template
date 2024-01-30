import './main.css';
import 'ui/globals.css';

import { createRoot } from 'react-dom/client';
import { App } from './app/app';

const container = document.getElementById('root');
container && createRoot(container).render(<App />);
