import ReactDOM from 'react-dom/client';

import { App } from '@app';

const rootNode = document.getElementById('root') as HTMLElement;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.error('SW registration failed: ', registrationError);
      });
  });
}

ReactDOM.createRoot(rootNode).render(<App />);
