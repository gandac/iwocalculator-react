import React from 'react';
import Layout from './components/Layout/Layout';
import MainPage from './pages/Mainpage';
import './App.css';

// App Wrapper
// Here we would wrap with other Higher Order rules for our pages
function App() {
  return (
      <Layout>
        <MainPage />
      </Layout>
  );
}

export default App;
