import React from 'react';
import AppProvider from './AppProvider';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
