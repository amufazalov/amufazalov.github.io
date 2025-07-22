import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop сбрасывает положение скролла в начало при изменении маршрута.
 */
export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}; 