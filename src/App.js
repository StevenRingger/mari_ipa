import React from 'react';
import './App.css';
import NavbarTest from './components/organisms/navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ErrorBoundary from './components/atoms/errorBoundary/ErrorBoundary';
import PopUpAlertProvider from './components/atoms/popUpAlert/PopUpAlertProvider';
import AnamnesePage from './components/pages/anamnesePage/AnamnesePage';
import CustomerPage from './components/pages/customerPage/CustomerPage';

function App() {
  library.add(fab, fas);
  return (
    <div className="App">
      <PopUpAlertProvider SnackbarProps={{ delay: 4000 }}>
        <NavbarTest />
        <Router>
          <ErrorBoundary>
            <Route exact path="/anamnese/:id" component={AnamnesePage} />
            <Route exact path="/customer/:id" component={CustomerPage} />
          </ErrorBoundary>
        </Router>
      </PopUpAlertProvider>
    </div>
  );
}

export default App;