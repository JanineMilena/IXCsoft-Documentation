import HomePage from './pages/home';
import Authorization from './pages/authorization';
import ReferencesPage from './pages/references';
import EndpointPage from './pages/endpoint';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/authorization' element={<Authorization />} />
        <Route path='/references' element={<ReferencesPage />} />
        <Route path='/endpoint' element={<EndpointPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
