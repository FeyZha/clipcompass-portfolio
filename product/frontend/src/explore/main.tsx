import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ExploreApp } from './ExploreApp';
import './explore.css';
import '../workspace/workspace-kimi.css';
import '../workspace/knowledge-color.css';
createRoot(document.getElementById('root')!).render(<StrictMode><ExploreApp /></StrictMode>);
