import { createRoot } from 'react-dom/client';
import { App } from './App';
import './ui.css';
import './workspace/workspace-kimi.css';
import './workspace/knowledge-color.css';
const root = document.getElementById('root');
if (!root) throw Error('Missing application root');
const params=new URLSearchParams(location.search);
// Keep embedded results and reading URLs; the former empty ask page now has one entry.
if(location.port==='14854'&&location.pathname==='/'&&!params.has('embed')&&!params.has('reading')&&!params.has('results')){
 location.replace('http://127.0.0.1:14855/#ask=1');
}else createRoot(root).render(<App />);
