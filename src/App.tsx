import React from 'react';
import AppProvider from './AppProvider';
import AppRoutes from './AppRoutes';

function App(): JSX.Element {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
