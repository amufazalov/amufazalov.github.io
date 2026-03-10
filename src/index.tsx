import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './app';

const RESIZE_OBSERVER_ERROR_MESSAGES: readonly string[] = [
  'ResizeObserver loop completed with undelivered notifications.',
  'ResizeObserver loop limit exceeded'
];

const isResizeObserverError = (message: string): boolean => {
  return RESIZE_OBSERVER_ERROR_MESSAGES.some((errorMessage: string) => message.includes(errorMessage));
};

if (process.env.NODE_ENV === 'development') {
  window.addEventListener('error', (event: ErrorEvent): void => {
    if (!isResizeObserverError(event.message)) {
      return;
    }
    event.stopImmediatePropagation();
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 