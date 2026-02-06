import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Инициализация Telegram Web App
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        disableVerticalSwipes: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
      };
    };
  }
}

// Настройка Telegram Mini App
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;

  // Сообщаем Telegram, что приложение готово
  tg.ready();

  // Разворачиваем на весь экран
  tg.expand();

  // ОТКЛЮЧАЕМ сворачивание при свайпе вниз
  tg.disableVerticalSwipes();

  // Устанавливаем цвета в стиле приложения
  tg.setHeaderColor('#000000');
  tg.setBackgroundColor('#000000');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
