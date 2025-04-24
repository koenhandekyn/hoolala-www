import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectToSubdomain = () => {
  const location = useLocation();
  useEffect(() => {
    const newUrl = `https://app.wazzat.app${location.pathname}${location.search}`;
    window.location.href = newUrl;
  }, [location]);
  return null;
};

export default RedirectToSubdomain;
