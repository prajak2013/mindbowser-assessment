import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BasicInfoPage from './components/BasicInfoPage';
import paths from './referenceData/paths';
import ProfInfoPage from './components/ProfInfoPage';
import SummaryPage from './components/SummaryPage';

const AppRouter = () => (
    <Router>
        <Route path={paths.HOME} exact component={HomePage}/>
        <Route path={paths.BASIC_INFO}  component={BasicInfoPage}/>
        <Route path={paths.PROFESSIONAL_INFO}  component={ProfInfoPage}/>
        <Route path={paths.SUMMARY}  component={SummaryPage}/>
    </Router>
);

export default AppRouter;