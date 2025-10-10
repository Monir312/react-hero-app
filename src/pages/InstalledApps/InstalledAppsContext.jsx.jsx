import React, { createContext, useContext, useState, useEffect } from 'react';

const InstalledAppsContext = createContext();

export const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = localStorage.getItem('installedApps');
    if (storedApps) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, []);

  useEffect(() => {
    if (installedApps.length > 0) {
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
    } else {
      localStorage.removeItem('installedApps');
    }
  }, [installedApps]);


  const addApp = (app) => {
    setInstalledApps((prevApps) => {
      if (prevApps.some((a) => a.title === app.title)) return prevApps;
      return [...prevApps, app];
    });
  };

  const removeApp = (title) => {
    setInstalledApps((prevApps) => prevApps.filter((app) => app.title !== title));
  };

  return (
    <InstalledAppsContext.Provider value={{ installedApps, addApp, removeApp }}>
      {children}
    </InstalledAppsContext.Provider>
  );
};

export const useInstalledApps = () => useContext(InstalledAppsContext);
